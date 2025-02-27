import { act, renderHook } from '@testing-library/react'
import { vi } from 'vitest'

import { useDebounceValue } from './use-debounce-value'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

it('Should use debounce value', () => {
  const { result } = renderHook(() => useDebounceValue('initial', 500))

  expect(typeof result.current).toBe('string')
})

it('Should update the debounced value after the specified delay', () => {
  const { result, rerender } = renderHook(({ value }) => useDebounceValue(value, 500), {
    initialProps: { value: 'initial' },
  })

  expect(result.current).toBe('initial')

  rerender({ value: 'updated' })

  expect(result.current).toBe('initial')

  act(() => {
    vi.advanceTimersByTime(500)
  })

  expect(result.current).toBe('updated')
})

it('Should reset debounce timer on rapid consecutive updates', () => {
  const { result, rerender } = renderHook(({ value }) => useDebounceValue(value, 500), {
    initialProps: { value: 'initial' },
  })

  rerender({ value: 'first-update' })
  act(() => vi.advanceTimersByTime(250))
  rerender({ value: 'second-update' })
  act(() => vi.advanceTimersByTime(250))
  rerender({ value: 'third-update' })

  expect(result.current).toBe('initial')

  act(() => vi.advanceTimersByTime(500))
  expect(result.current).toBe('third-update')
})
