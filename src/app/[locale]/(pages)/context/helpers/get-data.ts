import { ErrorCatchReturn } from '@/helpers'

import { translationApi } from '@/models'

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

  return await translationApi.getTranslation({ search, from, to })
}
