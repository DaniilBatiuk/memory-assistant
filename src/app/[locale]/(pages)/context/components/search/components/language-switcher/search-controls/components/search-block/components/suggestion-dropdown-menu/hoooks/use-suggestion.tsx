import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Dispatch, KeyboardEvent, RefObject, SetStateAction, useState } from 'react'
import { useShallow } from 'zustand/shallow'

import { LINKS } from '@/constants'

import { useContextStore } from '@/store'

import { useRouter } from '@/i18n'

import { translationApi } from '@/models'

interface IUseSuggestion {
  setIsFocused: Dispatch<SetStateAction<boolean>>
  inputRef: RefObject<HTMLInputElement | null>
}

export const useSuggestion = ({ setIsFocused, inputRef }: IUseSuggestion) => {
  const router = useRouter()

  const [selectedItem, setSelectedItem] = useState(-1)

  const { search, from, to, setSearch } = useContextStore(
    useShallow(state => ({
      search: state.search,
      setSearch: state.setSearch,
      from: state.from,
      to: state.to,
    })),
  )

  const { data: suggestions } = useQuery({
    queryKey: ['suggestion', from, to, search],
    queryFn: meta =>
      translationApi.getSuggestion(meta, {
        search,
        from,
        to,
      }),
    placeholderData: keepPreviousData,
    enabled: Boolean(search),
  })

  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      !suggestions ||
      !suggestions.success ||
      (suggestions && suggestions.success && suggestions.data.length < 1)
    )
      return

    if (e.key === 'ArrowUp' && selectedItem > 0) {
      setSelectedItem(prev => prev - 1)
    } else if (e.key === 'ArrowDown' && selectedItem < suggestions.data.length - 1) {
      setSelectedItem(prev => prev + 1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      setIsFocused(false)
      if (inputRef.current) inputRef.current.blur()
      if (selectedItem >= 0) {
        router.replace(
          `/${LINKS.Context}?search=${suggestions.data[selectedItem].replace(/<[^>]+>/g, '')}&from=${from}&to=${to}`,
        )
      } else {
        router.replace(`/${LINKS.Context}?search=${search.trim()}&from=${from}&to=${to}`)
      }
    }
  }

  return {
    from,
    to,
    search,
    setSearch,
    setSelectedItem,
    handlerKeyDown,
    suggestions,
    router,
    selectedItem,
  }
}
