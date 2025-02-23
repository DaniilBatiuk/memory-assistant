import { queryOptions } from '@tanstack/react-query'

import { getAllDictionaries, getDictionary } from '@/actions'

export const getDictionariesQueryOptions = (userId: string) => {
  return queryOptions({
    queryKey: ['dictionaries', userId],
    queryFn: () => getAllDictionaries(userId),
  })
}
export const getDictionaryQueryOptions = (dictionaryId: string) => {
  return queryOptions({
    queryKey: ['dictionary', dictionaryId],
    queryFn: () => getDictionary(dictionaryId),
  })
}
