export const errorCatch = <T extends any[], U>(
  fn: (...args: T) => Promise<U>,
): ((...args: T) => Promise<{ error: string; data?: never } | { error?: never; data: U }>) => {
  return async (...args: T) => {
    try {
      return { data: await fn(...args) }
    } catch (err: unknown) {
      if (err instanceof Error) return { error: err.message }
      throw err
    }
  }
}
