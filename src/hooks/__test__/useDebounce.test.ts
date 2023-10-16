import { renderHook, act } from '@testing-library/react'
import { useDebounce } from '..'

describe('useDebounce', () => {
  it('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('initialValue'))
    expect(result.current).toBe('initialValue')
  })

  it('should return the updated value after the delay', async () => {
    jest.useFakeTimers()

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initialValue', delay: 1000 },
      },
    )

    expect(result.current).toBe('initialValue')

    rerender({ value: 'updatedValue', delay: 1000 })

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current).toBe('updatedValue')

    jest.useRealTimers()
  })

  it('should return the updated value with default delay if delay is not specified', async () => {
    jest.useFakeTimers()

    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: 'initialValue' },
    })

    expect(result.current).toBe('initialValue')

    rerender({ value: 'updatedValue' })

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current).toBe('updatedValue')

    jest.useRealTimers()
  })

  it('should clean up the timer on unmount', () => {
    jest.useFakeTimers()

    const { result, unmount } = renderHook(() =>
      useDebounce('initialValue', 1000),
    )

    expect(result.current).toBe('initialValue')

    unmount()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current).toBe('initialValue')

    jest.useRealTimers()
  })
})
