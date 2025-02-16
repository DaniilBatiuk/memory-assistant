import { ErrorCatchReturn } from '@/helpers'

import { translationApi } from '@/shared/modules/translation-api'

const createSearchRegex = (search: string) => {
  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(?<!\\p{L})${escapedSearch}(?!\\p{L})`, 'iu')
}

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

  const [initialTranslations, initialContext] = await Promise.all([
    translationApi.getTranslation({ search, from, to }),
    translationApi.getContext({ search, from, to }),
  ])

  let translationsResult = initialTranslations
  let contextResult = initialContext

  if (!translationsResult.success) {
    translationsResult = await translationApi.getTranslation({ search, from, to })
  }
  if (!contextResult.success) {
    contextResult = await translationApi.getContext({ search, from, to })
  }

  if (!translationsResult.success || !contextResult.success) {
    return [translationsResult, contextResult]
  }

  const uniqueTranslations = [...new Set(translationsResult.data.translations)]

  const filteredExamples = contextResult.data.examples.filter(example => {
    const regexFrom = createSearchRegex(search)
    const matchFrom = regexFrom.exec(example.source)

    return Boolean(matchFrom)
  })

  return [
    { success: true, data: { ...translationsResult.data, translations: uniqueTranslations } },
    { success: true, data: { ...contextResult.data, examples: filteredExamples } },
  ]
}
