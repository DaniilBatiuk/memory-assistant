import { ErrorCatchReturn } from '@/helpers'

import { translationApi } from '@/shared/modules/translation-api'

export const getData = async ({
  search,
  from,
  to,
}: {
  search?: string
  from?: string
  to?: string
}): Promise<
  [ErrorCatchReturn<ITranslation> | undefined, ErrorCatchReturn<IContext> | undefined]
> => {
  if (!search || !from || !to) return [undefined, undefined]

  const [translations, context] = await Promise.all([
    translationApi.getTranslation({ search, from, to }),
    translationApi.getContext({ search, from, to }),
  ])
  if (!translations.success || !context.success) return [translations, context]

  const uniqueTranslations = [...new Set(translations.data.translations)]

  const filteredExamples = context.data.examples.filter(example => {
    const regexFrom = new RegExp(`(?<!\\p{L})${search}(?!\\p{L})`, 'iu')
    const matchFrom = regexFrom.exec(example.source)

    if (example.source.length < 2) return false
    return Boolean(matchFrom)
  })

  if (filteredExamples.length === 0) {
    return [
      { success: true, data: { ...translations.data, translations: uniqueTranslations } },
      { success: false, error: 'Not Found' },
    ]
  }

  return [
    { success: true, data: { ...translations.data, translations: uniqueTranslations } },
    { success: true, data: { ...context.data, examples: filteredExamples } },
  ]
}
