import { z } from 'zod'

export const dictionaryScheme = (t: (key: string) => string) => {
  return z.object({
    title: z
      .string()
      .nonempty(t('createDictionaryErrors.title.required'))
      .min(2, t('createDictionaryErrors.title.min'))
      .max(100, t('createDictionaryErrors.title.max')),
    description: z
      .string()
      .nonempty(t('createDictionaryErrors.description.required'))
      .min(5, t('createDictionaryErrors.description.min'))
      .max(500, t('createDictionaryErrors.description.max')),
  })
}

export const updateDictionarySchema = (t: (key: string) => string) =>
  dictionaryScheme(t).merge(
    z.object({
      id: z.string().cuid(),
    }),
  )

export type CreateDictionary = z.infer<Awaited<ReturnType<typeof dictionaryScheme>>>
export type UpdateDictionary = z.infer<Awaited<ReturnType<typeof updateDictionarySchema>>>
