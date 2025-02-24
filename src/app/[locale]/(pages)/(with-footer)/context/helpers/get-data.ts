import { ErrorCatchReturn } from '@/helpers'

import { translationApi } from '@/models'

const uniqueTranslations = (translations: ITranslationDto): ITranslationDto => {
  const seenTexts = new Set<string>()

  return {
    ...translations,
    def: translations.def
      .map(definition => ({
        ...definition,
        tr: definition.tr.filter(translation => {
          if (seenTexts.has(translation.text)) return false
          seenTexts.add(translation.text)
          return true
        }),
      }))
      .filter(definition => definition.tr.length > 0), // Убираем пустые `def`
  }
}

export const getData = async ({
  search,
  from,
  to,
}: {
  search?: string
  from?: string
  to?: string
}): Promise<ErrorCatchReturn<ITranslationDto> | undefined> => {
  if (!search || !from || !to) return undefined

  const translations = await translationApi.getTranslation({ search, from, to })

  if (!translations.success) return translations

  const filteredTranslations = uniqueTranslations(translations.data)

  return { data: filteredTranslations, success: true }
}
