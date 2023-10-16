import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import LoginForm from '..'

describe('LoadingIndicator Component', () => {
  const mockOnSubmit = jest.fn()

  const setup = () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginForm errorMessage="" onSubmit={mockOnSubmit} />,
    )

    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')
    const submitButton = getByText('Login')

    return {
      emailInput,
      passwordInput,
      submitButton,
    }
  }
  it('should render correctly', () => {
    const { container } = render(<LoginForm onSubmit={mockOnSubmit} />)
    expect(container).toMatchSnapshot()
  })

  it('handles form submission with valid data', async () => {
    const { emailInput, passwordInput, submitButton } = setup()

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      })
    })
  })

  it('should display an error message for an invalid email', async () => {
    const { emailInput, submitButton } = setup()

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } })
    fireEvent.click(submitButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Invalid format of email, please check.'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for a missing email', async () => {
    const { passwordInput, submitButton } = setup()

    fireEvent.change(passwordInput, { target: { value: 'password@123' } })
    fireEvent.click(submitButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Email is required'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for a missing password', async () => {
    const { emailInput, submitButton } = setup()

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Password is required'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for a missing email and password', async () => {
    const { submitButton } = setup()
    fireEvent.click(submitButton)

    const emailErrorMessage = await waitFor(() =>
      screen.getByText('Email is required'),
    )

    const passwordErrorMessage = await waitFor(() =>
      screen.getByText('Password is required'),
    )

    expect(emailErrorMessage).toBeInTheDocument()
    expect(passwordErrorMessage).toBeInTheDocument()
  })
})
