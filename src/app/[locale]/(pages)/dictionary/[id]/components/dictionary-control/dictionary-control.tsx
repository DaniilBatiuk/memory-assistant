'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

import { getDictionaryQueryOptions } from '@/lib'

interface DictionaryControlProps {
  dictionaryId: string
}

export const DictionaryControl: React.FC<DictionaryControlProps> = ({
  dictionaryId,
}: DictionaryControlProps) => {
  const t = useTranslations('Dictionary')

  const { data: dictionary } = useSuspenseQuery(getDictionaryQueryOptions(dictionaryId))

  return (
    <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
      <div className='flex items-end gap-3'>
        <h1 className='font-bold adaptive-font-size-30-40'>{t('title')}</h1>
        <p className='text-foreground/55 adaptive-font-size-14-16'>
          {dictionary ? dictionary.words.length : 0} word
        </p>
      </div>
      <Button>{t('quiz')}</Button>
    </div>
  )
}
