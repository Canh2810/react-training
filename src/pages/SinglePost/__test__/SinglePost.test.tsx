import { render, screen, waitFor } from '@testing-library/react'
import SinglePost from '..'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { POSTS_MOCK, POST_MOCK, THEMES } from '@constants'
import { usePostsStore, useQueryStore, useThemeStore } from '@stores'

const queryClient = new QueryClient()

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <SinglePost />
    </QueryClientProvider>,
    { wrapper: MemoryRouter },
  )

const mockUseFetchPosts = jest.fn()
const mockUseFetchPost = jest.fn()
const mockUseDebounce = jest.fn()

jest.mock('@hooks', () => ({
  ...jest.requireActual('@hooks'),
  useFetchPosts: () => mockUseFetchPosts,
  useFetchPost: () => mockUseFetchPost,
  useDebounce: () => mockUseDebounce,
}))

describe('SinglePost page', () => {
  beforeEach(() => {
    mockUseFetchPosts.mockReturnValue({
      isLoading: false,
      isError: false,
      error: null,
    }),
      mockUseFetchPost.mockReturnValue({
        data: POST_MOCK,
        isLoading: false,
        isError: false,
        error: null,
      }),
      mockUseDebounce.mockReturnValue(''),
      useThemeStore.setState({
        theme: THEMES.LIGHT,
      }),
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

  it('should show error message if there is an error while fetching post', () => {
    mockUseFetchPost.mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
      error: { message: 'Error fetching post' },
    })

    setup()
    waitFor(() => {
      expect(screen.getByText('Error fetching post')).toBeInTheDocument()
    })
  })

  it('should show loading indicator while fetching data', () => {
    mockUseFetchPost.mockReturnValue({
      data: POST_MOCK,
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
