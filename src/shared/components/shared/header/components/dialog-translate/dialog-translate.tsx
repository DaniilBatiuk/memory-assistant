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
import { useTranslationDialog } from './hooks/use-translation-dialog'

interface DialogTranslateProps {
  children: React.ReactNode
}

export const DialogTranslate: React.FC<DialogTranslateProps> = ({
  children,
}: DialogTranslateProps) => {
  const t = useTranslations('TranslationDialog')

  const {
    search,
    setSearch,
    translation,
    isFetching,
    debouncedSearch,
    switchLanguages,
    from,
    to,
    setFrom,
    setTo,
  } = useTranslationDialog()

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[900px]'>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription className='hidden'>{t('title')}</DialogDescription>
        </DialogHeader>
        <div>
          <Languages
            switchLanguages={switchLanguages}
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
          />
          <TranslationFields
            search={search}
            setSearch={setSearch}
            translation={translation}
            isFetching={isFetching}
            debouncedSearch={debouncedSearch}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
