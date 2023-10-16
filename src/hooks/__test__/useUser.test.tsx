import { waitFor, renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFetchUser } from '..'
import { ReactNode } from 'react'
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

describe('useFetchUser', () => {
  it('fetches user data successfully', async () => {
    const mockUser = { id: 1, name: 'CanhVo' }
    jest.spyOn(utils, 'get').mockResolvedValue(mockUser)

    const { result } = renderHook(() => useFetchUser(), {
      wrapper,
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data).toEqual(mockUser)
    })
  })

  it('return error when fetches user data failed', async () => {
    const errorResponse = { error: 'Error' }
    jest.spyOn(utils, 'get').mockRejectedValue(errorResponse)

    const { result } = renderHook(() => useFetchUser(), {
      wrapper,
    })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })
  })
})
