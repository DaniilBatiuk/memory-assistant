import { z } from 'zod'

export const subscribeSchema = (t: (key: string) => string) =>
  z.string().nonempty(t('subscribeErrors.required')).email(t('subscribeErrors.correct'))

export type Subscribe = z.infer<ReturnType<typeof subscribeSchema>>
