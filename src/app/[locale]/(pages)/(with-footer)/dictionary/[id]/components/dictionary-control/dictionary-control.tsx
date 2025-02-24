'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui'

import { getDictionaryQueryOptions } from '@/lib'

import { QuizQuantityDialog } from './components/quiz-quantity-dialog/quiz-quantity-dialog'
import { QuizTypeDialog } from './components/quiz-type-dialog/quiz-type-dialog'

interface DictionaryControlProps {
  dictionaryId: string
}

export const DictionaryControl: React.FC<DictionaryControlProps> = ({
  dictionaryId,
}: DictionaryControlProps) => {
  const t = useTranslations('Dictionary')

  const { data: dictionary } = useSuspenseQuery(getDictionaryQueryOptions(dictionaryId))

  const [type, setType] = useState<string | null>(null)
  const [openTypeDialog, setOpenTypeDialog] = useState(false)
  const [openQuantityDialog, setOpenQuantityDialog] = useState(false)

  useEffect(() => {
    if (type) {
      setOpenQuantityDialog(true)
    }
  }, [type])
  useEffect(() => {
    if (!openQuantityDialog && openTypeDialog!) {
      setType(null)
    }
  }, [openQuantityDialog, openTypeDialog])

  return (
    <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
      <div className='flex items-end gap-3'>
        <h1 className='font-bold adaptive-font-size-30-40'>{t('title')}</h1>
        <p className='text-foreground/55 adaptive-font-size-14-16'>
          {dictionary ? dictionary.words.length : 0} {t('word')}
        </p>
      </div>
      <QuizTypeDialog
        openTypeDialog={openTypeDialog}
        setOpenTypeDialog={setOpenTypeDialog}
        setType={setType}
      >
        <Button disabled={dictionary?.words.length === 0}>{t('quiz')}</Button>
      </QuizTypeDialog>
      {type && dictionary && (
        <QuizQuantityDialog
          dictionary={dictionary}
          setOpenQuantityDialog={setOpenQuantityDialog}
          openQuantityDialog={openQuantityDialog}
          type={type}
        />
      )}
    </div>
  )
}
