import { z } from 'zod'

export const wordScheme = (t: (key: string) => string) => {
  return z.object({
    id: z.string().cuid(),
    word: z
      .string()
      .nonempty(t('updateWordErrors.word.required'))
      .min(2, t('updateWordErrors.word.min'))
      .max(100, t('updateWordErrors.word.max')),
    translations: z
      .string()
      .nonempty(t('updateWordErrors.translations.required'))
      .min(5, t('updateWordErrors.translations.min'))
      .max(500, t('updateWordErrors.translations.max')),
  })
}

export type UpdateWord = z.infer<Awaited<ReturnType<typeof wordScheme>>>
