'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

import { useToast } from '@/hooks'

import { ErrorCatchReturn } from '@/helpers'

interface NotFoundTranslationProps {
  textToTranslate: string
  translations: ErrorCatchReturn<ITranslation> | undefined
  context: ErrorCatchReturn<IContext> | undefined
}

export const NotFoundTranslation: React.FC<NotFoundTranslationProps> = ({
  textToTranslate,
  translations,
  context,
}: NotFoundTranslationProps) => {
  const t = useTranslations('Context')
  const { toast } = useToast()

  useEffect(() => {
    const translationsError =
      translations && !translations.success && translations.error === 'Something went wrong'
    const contextError = context && !context.success && context.error === 'Something went wrong'
    if (translationsError || contextError) {
      setTimeout(() => {
        toast({
          variant: 'destructive',
          title: t('error.title'),
          description: t('error.subtitle'),
        })
      }, 0)
    }
  }, [translations, context, toast])

  if (!translations && !context) {
    return null
  }

  return (
    <div className='flex items-center justify-center rounded-md border bg-foreground/3 p-4 adaptive-margin-top-20-40'>
      <h2 className='text-center font-semibold adaptive-font-size-18-20'>{textToTranslate}</h2>
    </div>
  )
}
