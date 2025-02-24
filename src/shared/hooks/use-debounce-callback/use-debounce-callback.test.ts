import { renderHook } from '@testing-library/react'
import { act } from 'react'

import { useDebounceCallback } from './use-debounce-callback'

vi.useFakeTimers()
it('Should use debounce callback', () => {
  const { result } = renderHook(() => useDebounceCallback(vi.fn(), 0))

  expect(typeof result.current).toBe('function')
})

it('Should debounce the callback one time', () => {
  const callback = vi.fn()
  const { result } = renderHook(() => useDebounceCallback(callback, 500))

  act(() => {
    result.current()
    result.current()
    result.current()
  })

  expect(callback).not.toHaveBeenCalled()

  act(() => {
    vi.advanceTimersByTime(500)
  })

  expect(callback).toHaveBeenCalledTimes(1)
})

it('Should reset the timer if called again before delay', () => {
  const callback = vi.fn()
  const { result } = renderHook(() => useDebounceCallback(callback, 500))

  act(() => {
    result.current()
    vi.advanceTimersByTime(300)
    result.current()
    vi.advanceTimersByTime(300)
  })

  expect(callback).not.toHaveBeenCalled()

  act(() => {
    vi.advanceTimersByTime(200)
  })

  expect(callback).toHaveBeenCalledTimes(1)
})
