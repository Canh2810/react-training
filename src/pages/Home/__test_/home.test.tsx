import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from '..'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { POSTS_MOCK } from '@constants'
import { usePostsStore, useQueryStore } from '@stores'

const queryClient = new QueryClient()

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>,
    { wrapper: MemoryRouter },
  )

const mockUseFetchPosts = jest.fn()
const mockUseFetchUser = jest.fn()
const mockUseDebounce = jest.fn()

jest.mock('@hooks', () => ({
  ...jest.requireActual('@hooks'),
  useFetchPosts: () => mockUseFetchPosts,
  useFetchUser: () => mockUseFetchUser,
  useDebounce: () => mockUseDebounce,
}))

describe('Home page', () => {
  beforeEach(() => {
    mockUseFetchPosts.mockReturnValue({
      isLoading: false,
      isError: false,
      error: null,
    }),
      mockUseFetchUser.mockReturnValue({
        isLoading: false,
        isError: false,
        error: null,
      }),
      mockUseDebounce.mockReturnValue(''),
      usePostsStore.setState({
        posts: POSTS_MOCK,
      }),
      useQueryStore.setState({
        query: '',
      })
  })
  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('should toggle view all posts', () => {
    setup()
    const button = screen.getByText('View all post')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(button).toHaveTextContent('Hide less')
  })

  it('should show error message if there is an error while fetching posts', () => {
    mockUseFetchPosts.mockReturnValue({
      isLoading: false,
      isError: true,
      error: { message: 'Error fetching posts' },
    })

    setup()
    waitFor(() => {
      expect(screen.getByText('Error fetching posts')).toBeInTheDocument()
    })
  })

  it('should show loading indicator while fetching data', () => {
    mockUseFetchPosts.mockReturnValue({
      isLoading: true,
      isError: false,
      error: null,
    })
    mockUseFetchUser.mockReturnValue({
      isLoading: true,
      isError: false,
      error: null,
    })

    setup()
    waitFor(() => {
      expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
    })
  })

  it('should render search results when there is a query', () => {
    mockUseDebounce.mockReturnValue('abc')

    waitFor(() => {
      expect(screen.getByTestId('No Result Found')).toBeInTheDocument()
    })
  })
})
