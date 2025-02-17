import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import { Input } from '@/components/ui'

import { LINKS } from '@/constants'

import { isSuccessResponse } from '@/helpers'

import { cn } from '@/shared/lib/css'

import { useSuggestion } from './hoooks/use-suggestion'

export const SuggestionDropdownMenuWithInput: React.FC = () => {
  const t = useTranslations('Context')

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const {
    search,
    setSearch,
    setSelectedItem,
    handlerKeyDown,
    suggestions,
    router,
    selectedItem,
    from,
    to,
  } = useSuggestion({
    inputRef,
    setIsFocused,
  })

  const hasValidSuggestions =
    isFocused && search.length > 0 && isSuccessResponse(suggestions) && suggestions.data.length > 0

  return (
    <>
      <Input
        placeholder={t('placeholder')}
        size={'md'}
        name='search'
        className='rounded-r-none border-r-0 !ring-0 focus:border-foreground'
        autoComplete='off'
        value={search}
        ref={inputRef}
        onChange={e => {
          setSearch(e.target.value)
          setSelectedItem(-1)
        }}
        onKeyDown={handlerKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {hasValidSuggestions ? (
        <div className='absolute top-[54px] z-10 flex w-full flex-col rounded-md border bg-background py-[6px]'>
          {suggestions.data.map((suggestion, index) => (
            <p
              onMouseDown={e => {
                e.preventDefault()
                setIsFocused(false)
                if (inputRef.current) inputRef.current.blur()
                router.replace(
                  `/${LINKS.Context}?search=${suggestions.data[index].replace(/<[^>]+>/g, '')}&from=${from}&to=${to}`,
                )
              }}
              className={cn('px-3 py-2 hover:bg-foreground/5', {
                'bg-foreground/5': index === selectedItem,
              })}
              key={index}
            >
              <span dangerouslySetInnerHTML={{ __html: suggestion }} />
            </p>
          ))}
        </div>
      ) : null}
    </>
  )
}
