import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from '..'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { ROUTES } from '@constants'

const queryClient = new QueryClient()

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>,
    { wrapper: MemoryRouter },
  )

const mutateMock = jest.fn()

jest.mock('@hooks', () => ({
  ...jest.requireActual('@hooks'),
  useAuth: () => ({
    login: {
      mutate: mutateMock,
      isLoading: false,
    },
  }),
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

beforeEach(() => {
  // Reset mock function states before each test
  jest.clearAllMocks()
})

describe('Login page', () => {
  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('handles form submission correctly', async () => {
    setup()

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'canhvo@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'canhvo@123' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mutateMock).toHaveBeenCalledWith(
        { email: 'canhvo@gmail.com', password: 'canhvo@123' },
        expect.objectContaining({
          onSuccess: expect.any(Function),
          onError: expect.any(Function),
        }),
      )
    })

    const mockResponse = { token: 'mock-token' }
    await waitFor(() => {
      mutateMock.mock.calls[0][1].onSuccess(mockResponse)
    })

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.HOME)
  })

  it('handles form submission error', async () => {
    setup()

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'canhvo@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mutateMock).toHaveBeenCalledWith(
        { email: 'canhvo@gmail.com', password: 'wrongpassword' },
        expect.objectContaining({
          onSuccess: expect.any(Function),
          onError: expect.any(Function),
        }),
      )
    })

    const mockError = { message: 'Invalid email or password' }
    await waitFor(() => {
      mutateMock.mock.calls[0][1].onError(mockError)
    })

    const errorMessage = screen.getByText(mockError.message)

    expect(errorMessage).toBeInTheDocument()
  })
})
