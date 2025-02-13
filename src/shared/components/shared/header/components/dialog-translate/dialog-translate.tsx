'use client'

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

import { SelectLanguage } from '@/shared/components/ui/select-language'

interface DialogTranslateProps {
  children: React.ReactNode
}

export const DialogTranslate: React.FC<DialogTranslateProps> = ({
  children,
}: DialogTranslateProps) => {
  const t = useTranslations('TranslationDialog')

  const [langFrom, setLangFrom] = useState(LANGUAGES[2])
  const [langTo, setLangTo] = useState(LANGUAGES[10])

  const switchLanguages = () => {
    setLangFrom(langTo)
    setLangTo(langFrom)
  }

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
            <SelectLanguage value={langFrom} onChangeValue={value => setLangFrom(value)} />
            <Button
              variant='ghost'
              size='icon'
              className='[&_svg]:size-[1.3rem]'
              onClick={switchLanguages}
            >
              {ICONS.switch()}
            </Button>
            <SelectLanguage value={langTo} onChangeValue={value => setLangTo(value)} />
          </div>
          <div className='flex h-[140px] gap-4 max-[700px]:h-[280px] max-[700px]:flex-col'>
            <Textarea placeholder={t('from')} className='resize-none max-[700px]:h-1/2' />
            <Textarea placeholder={t('to')} className='resize-none max-[700px]:h-1/2' />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
