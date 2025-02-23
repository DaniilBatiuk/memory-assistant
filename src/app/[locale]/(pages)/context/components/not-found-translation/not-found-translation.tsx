'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

import { useToast } from '@/hooks'

import { ErrorCatchReturn } from '@/helpers'

interface NotFoundTranslationProps {
  textToTranslate: string
  translations: ErrorCatchReturn<ITranslationDto> | undefined
}

export const NotFoundTranslation: React.FC<NotFoundTranslationProps> = ({
  textToTranslate,
  translations,
}: NotFoundTranslationProps) => {
  const t = useTranslations('Context')
  const { toast } = useToast()

  useEffect(() => {
    const translationsError =
      translations && !translations.success && translations.error === 'Something went wrong'

    if (translationsError) {
      setTimeout(() => {
        toast({
          variant: 'destructive',
          title: t('error.title'),
          description: t('error.subtitle'),
        })
      }, 0)
    }
  }, [translations, toast])

  if (!translations) {
    return null
  }

  return (
    <div className='flex items-center justify-center rounded-md border bg-foreground/3 px-4 adaptive-margin-top-20-40 adaptive-padding-block-20-60'>
      <h2 className='text-center font-semibold adaptive-font-size-18-20'>{textToTranslate}</h2>
    </div>
  )
}
