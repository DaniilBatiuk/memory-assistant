'use client'

import { useEffect } from 'react'

import { useToast } from '@/hooks'

import { ErrorCatchReturn } from '@/helpers'

interface NotFoundTranslationProps {
  textToTranslate: string
  translations: ErrorCatchReturn<ITranslation> | undefined
  context: ErrorCatchReturn<IContext> | undefined
  errorTitle: string
  errorSubtitle: string
}

export const NotFoundTranslation: React.FC<NotFoundTranslationProps> = ({
  textToTranslate,
  translations,
  context,
  errorTitle,
  errorSubtitle,
}: NotFoundTranslationProps) => {
  const { toast } = useToast()

  useEffect(() => {
    if ((translations && !translations.success) || (context && !context.success)) {
      toast({
        variant: 'destructive',
        title: errorTitle,
        description: errorSubtitle,
      })
    }
  }, [translations, context, toast])

  if (
    (!translations && !context) ||
    (translations && !translations.success) ||
    (context && !context.success)
  ) {
    return null
  }

  return (
    <div className='flex items-center justify-center rounded-md border bg-foreground/3 p-4 adaptive-margin-top-20-40'>
      <h2 className='text-center font-semibold adaptive-font-size-18-20'>{textToTranslate}</h2>
    </div>
  )
}
