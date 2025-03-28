import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { LANGUAGES } from '@/constants'

import { useDebounceValue } from '@/hooks'

import { translationApi } from '@/models'

export const useTranslationDialog = () => {
  const [search, setSearch] = useState('')
  const [from, setFrom] = useState(LANGUAGES[1])
  const [to, setTo] = useState(LANGUAGES[5])

  const switchLanguages = async () => {
    setFrom(to)
    setTo(from)
    setSearch(translation && translation.success ? translation.data.translations[0] : '')
  }

  const debouncedSearch = useDebounceValue(search, 500)

  const { data: translation, isFetching } = useQuery({
    queryKey: ['translate', from, to, debouncedSearch],
    queryFn: () =>
      translationApi.getTranslationText({
        search,
        from,
        to,
      }),
    placeholderData: keepPreviousData,
    enabled: Boolean(search),
  })

  return {
    search,
    setSearch,
    from,
    setFrom,
    to,
    setTo,
    switchLanguages,
    translation,
    isFetching,
    debouncedSearch,
  }
}
