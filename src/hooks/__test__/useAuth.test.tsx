import { renderHook, act, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuth } from '..'
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

describe('useAuth', () => {
  it('should successfully log in', async () => {
    const responseData = { token: 'token' }
    jest.spyOn(utils, 'post').mockResolvedValue(responseData)
    const { result } = renderHook(() => useAuth(), { wrapper })
    const loginData = {
      email: 'test@example.com',
      password: 'password123',
    }

    act(() => {
      result.current.login.mutate(loginData)
    })

    await waitFor(() => {
      return result.current.login.isSuccess
    })

    expect(result.current.login.isSuccess).toBe(true)
    expect(result.current.login.data).toEqual(responseData)
  })

  it('should return an error from the server', async () => {
    const errorResponse = { error: 'Invalid credentials' }
    jest.spyOn(utils, 'post').mockRejectedValue(errorResponse)
    const { result } = renderHook(() => useAuth(), { wrapper })
    const loginData = {
      email: 'test@example.com',
      password: 'invalidpassword', // This password should trigger an error
    }

    act(() => {
      result.current.login.mutate(loginData)
    })

    await waitFor(() => {
      return result.current.login.isError
    })

    expect(result.current.login.isError).toBe(true)
    expect(result.current.login.error).toEqual(errorResponse)
  })
})
