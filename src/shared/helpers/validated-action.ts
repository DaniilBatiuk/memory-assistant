 
import { z } from 'zod'

export type ActionState = {
  errors: { [key: string]: string | undefined }
  success: boolean
  inputs: { [key: string]: string | undefined }
  [key: string]: any
}

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData,
) => Promise<T>

export function validatedAction<S extends () => Promise<z.ZodType<any, any>>, T>(
  schemaFactory: S,
  action: ValidatedActionFunction<Awaited<ReturnType<S>>, T>,
) {
  return async (prevState: ActionState, formData: FormData): Promise<T> => {
    const schema = await schemaFactory() // Дожидаемся схему
    const result = schema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
      const errors = result.error.errors.reduce(
        (acc, err) => {
          acc[err.path[0]] = err.message || 'Unknown error'
          return acc
        },
        {} as { [key: string]: string },
      )

      return {
        success: false,
        errors,
        inputs: Object.fromEntries(formData),
      } as T
    }

    return action(result.data, formData)
  }
}
