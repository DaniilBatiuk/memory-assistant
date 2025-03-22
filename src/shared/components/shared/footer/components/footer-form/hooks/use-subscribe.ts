import { useTranslations } from 'next-intl'

import { useToast } from '@/hooks'

import { subscribeSchema } from '@/validators'

export const useSubscribe = () => {
  const t = useTranslations('Footer')

  const { toast } = useToast()

  const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const parseResult = subscribeSchema(t).safeParse(email)

    if (parseResult.success) {
      toast({
        title: t('subscribeSuccess.subtitle'),
        description: t('subscribeSuccess.description'),
      })
      e.currentTarget.reset()
      return
    }
    toast({
      variant: 'destructive',
      title: t('subscribeErrors.title'),
      description: parseResult.error.issues[0].message,
    })
  }

  return { onSubscribe, t }
}
