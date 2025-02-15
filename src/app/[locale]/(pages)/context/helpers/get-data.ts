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

  if (translations.success) {
    const uniqueTranslations = [...new Set(translations.data.translations)]
    return [
      { success: true, data: { ...translations.data, translations: uniqueTranslations } },
      context,
    ]
  }

  return [translations, context]
}
