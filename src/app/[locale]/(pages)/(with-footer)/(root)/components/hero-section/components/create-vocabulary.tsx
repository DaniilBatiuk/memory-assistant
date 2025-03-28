'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

import { useCreateAVocabulary } from './hooks/use-create-vocabulary'

export const CreateAVocabulary: React.FC = () => {
  const t = useTranslations('HomePage')
  const { createAVocabulary } = useCreateAVocabulary()

  return (
    <Button size='lg' onClick={createAVocabulary} className='hidden-animation-left delay-400'>
      {t('createAVocabulary')}
    </Button>
  )
}
