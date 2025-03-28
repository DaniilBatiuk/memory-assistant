'use client'

import { useTranslations } from 'next-intl'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'

import { Languages } from './components/languages'
import { TranslationFields } from './components/translation-fields'

interface DialogTranslateProps {
  children: React.ReactNode
}

export const DialogTranslate: React.FC<DialogTranslateProps> = ({
  children,
}: DialogTranslateProps) => {
  const t = useTranslations('TranslationDialog')

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[900px]'>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription className='hidden'>{t('title')}</DialogDescription>
        </DialogHeader>
        <div>
          <Languages />
          <TranslationFields />
        </div>
      </DialogContent>
    </Dialog>
  )
}
