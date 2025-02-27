export type ErrorCatchReturn<U> = { success: false; error: string } | { success: true; data: U }

export const errorCatch = <T extends any[], U>(
  fn: (...args: T) => Promise<U>,
): ((...args: T) => Promise<ErrorCatchReturn<U>>) => {
  return async (...args: T) => {
    try {
      return { success: true, data: await fn(...args) }
    } catch (err: unknown) {
      if (err instanceof Error) return { success: false, error: err.message }
      throw err
    }
  }
}

export const isSuccessResponse = <T>(
  result: ErrorCatchReturn<T> | undefined,
): result is { success: true; data: T } => {
  return result ? result.success : false
}
