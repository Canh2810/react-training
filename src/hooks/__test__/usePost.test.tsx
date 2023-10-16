import { waitFor, renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFetchPost, useFetchPosts } from '..'
import { ReactNode } from 'react'
import { INITIAL_POST, POSTS_MOCK, POST_MOCK } from '@constants'
import * as utils from '@utils'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('@utils')

describe('useFetchPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('fetch posts data successfully', async () => {
    jest.spyOn(utils, 'get').mockResolvedValue(POSTS_MOCK)

    const { result } = renderHook(() => useFetchPosts(''), { wrapper })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.data).toEqual(POSTS_MOCK)
  })

  it('should not fetch posts when disabled', async () => {
    const { result } = renderHook(() => useFetchPosts('', '', false), {
      wrapper,
    })

    await waitFor(() => {
      expect(result.current.data).toBeUndefined()
    })
  })
})

describe('useFetchPost', () => {
  it('return initialData when fetch post data failed', async () => {
    const errorResponse = { error: 'Error' }
    jest.spyOn(utils, 'get').mockRejectedValue(errorResponse)

    const { result } = renderHook(() => useFetchPost('1'), { wrapper })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.data).toEqual(INITIAL_POST)
    })
  })
  it('fetch post data successfully', async () => {
    jest.spyOn(utils, 'get').mockResolvedValue(POST_MOCK)

    const { result } = renderHook(() => useFetchPost('1'), { wrapper })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data).toEqual(POST_MOCK)
    })
  })
})
