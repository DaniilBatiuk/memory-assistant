'use client'

import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  SelectLanguage,
  Textarea,
} from '@/components/ui'

import { ICONS, LANGUAGES } from '@/constants'

import { useDebounceValue } from '@/hooks'

import { cn } from '@/lib'

import { translationApi } from '@/models'

interface DialogTranslateProps {
  children: React.ReactNode
}

export const DialogTranslate: React.FC<DialogTranslateProps> = ({
  children,
}: DialogTranslateProps) => {
  const t = useTranslations('TranslationDialog')

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
      translationApi.getTranslation({
        search,
        from,
        to,
      }),
    placeholderData: keepPreviousData,
    enabled: Boolean(search),
  })

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[900px]'>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription className='hidden'>{t('title')}</DialogDescription>
        </DialogHeader>
        <div>
          <div className='mb-3 flex justify-center space-x-1 [&_button]:border-[0px] [&_button]:!ring-0'>
            <SelectLanguage
              value={from}
              onChangeValue={value => setFrom(value)}
              excludeValue={to}
            />
            <Button
              variant='ghost'
              size='icon'
              className='[&_svg]:size-[1.5rem]'
              onClick={switchLanguages}
            >
              {ICONS.switch()}
            </Button>
            <SelectLanguage value={to} onChangeValue={value => setTo(value)} excludeValue={from} />
          </div>
          <div className='flex gap-4 max-[700px]:flex-col'>
            <Textarea
              placeholder={t('from')}
              value={search}
              className='scrollbar-thin h-[300px] resize-none max-[700px]:h-[200px]'
              onChange={e => setSearch(e.target.value)}
            />
            <Textarea
              placeholder={t('to')}
              className={cn('scrollbar-thin h-[300px] resize-none !ring-0 max-[700px]:h-[200px]', {
                'text-foreground/40': isFetching || search !== debouncedSearch,
              })}
              readOnly
              value={translation && translation.success ? translation.data.translations[0] : ''}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
