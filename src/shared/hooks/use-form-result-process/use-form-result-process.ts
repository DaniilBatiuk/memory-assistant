import { useEffect } from 'react'

import { ActionState } from '@/helpers'

interface useFormResultProcessProps {
  state: ActionState
  onSuccess?: () => void
  onError?: () => void
}

/**
 * @name useFormResultProcess
 * @description - A hook to handle form result processing based on the action state and loading status.
 *
 * @param {useFormResultProcessProps} props The properties to configure the hook
 * @param {ActionState} props.state The current action state containing `success`, `inputs` and `errors`
 * @param {() => void} [props.onSuccess] Callback executed on successful form action
 * @param {() => void} [props.onError] Callback executed when form action encounters errors
 *
 * @example
 * useFormResultProcess({
 *   state: { success: true, errors: {} },
 *   onSuccess: () => console.log('Form succeeded!'),
 *   onError: () => console.error('Form encountered errors'),
 * });
 */

export const useFormResultProcess = ({ state, onSuccess, onError }: useFormResultProcessProps) => {
  useEffect(() => {
    if (state.success) {
      onSuccess?.()
    } else if (Object.keys(state.errors).length) {
      onError?.()
    }
  }, [state])
}
