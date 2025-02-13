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
  Textarea,
} from '@/components/ui'

import { ICONS, LANGUAGES } from '@/constants'

import { useDebounceValue } from '@/hooks'

import { SelectLanguage } from '@/shared/components/ui/select-language'
import { cn } from '@/shared/lib/css'
import { translationApi } from '@/shared/modules/translation-api'

const randomUseragent = require('random-useragent')
interface DialogTranslateProps {
  children: React.ReactNode
}

export const DialogTranslate: React.FC<DialogTranslateProps> = ({
  children,
}: DialogTranslateProps) => {
  const t = useTranslations('TranslationDialog')

  const [textToTranslate, setTextToTranslate] = useState('')
  const [langFrom, setLangFrom] = useState(LANGUAGES[2])
  const [langTo, setLangTo] = useState(LANGUAGES[9])

  const switchLanguages = async () => {
    setLangFrom(langTo)
    setLangTo(langFrom)

    setTextToTranslate(translation && translation.data ? translation.data.translations[0] : '')
  }

  const debouncedTextToTranslate = useDebounceValue(textToTranslate, 500)

  const { data: translation, isFetching } = useQuery({
    queryKey: ['translate', langFrom, langTo, debouncedTextToTranslate],
    queryFn: () => translationApi.getTranslation({ textToTranslate, langFrom, langTo }),
    placeholderData: keepPreviousData,
    enabled: Boolean(textToTranslate),
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
              value={langFrom}
              onChangeValue={value => setLangFrom(value)}
              excludeValue={langTo}
            />
            <Button
              variant='ghost'
              size='icon'
              className='[&_svg]:size-[1.5rem]'
              onClick={switchLanguages}
            >
              {ICONS.switch()}
            </Button>
            <SelectLanguage
              value={langTo}
              onChangeValue={value => setLangTo(value)}
              excludeValue={langFrom}
            />
          </div>
          <div className='flex gap-4 max-[700px]:flex-col'>
            <Textarea
              placeholder={t('from')}
              value={textToTranslate}
              className='scrollbar-thin h-[300px] resize-none max-[700px]:h-[200px]'
              onChange={e => setTextToTranslate(e.target.value)}
            />
            <Textarea
              placeholder={t('to')}
              className={cn('scrollbar-thin h-[300px] resize-none !ring-0 max-[700px]:h-[200px]', {
                'text-foreground/40': isFetching || textToTranslate !== debouncedTextToTranslate,
              })}
              readOnly
              value={translation && translation.data ? translation.data.translations[0] : ''}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
