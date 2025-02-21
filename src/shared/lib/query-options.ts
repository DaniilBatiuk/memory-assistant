import { queryOptions } from '@tanstack/react-query'

import { getAllDictionaries } from './queries'

export const getDictionariesQueryOptions = (userId: string) => {
  return queryOptions({
    queryKey: ['dictionaries', userId],
    queryFn: () => getAllDictionaries(userId),
  })
}
