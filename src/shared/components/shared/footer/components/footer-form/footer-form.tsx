'use client'

import { useTranslations } from 'next-intl'

import { Button, Input } from '@/components/ui'

import { useToast } from '@/hooks'

import { subscribeSchema } from '@/validators'

export const FooterForm: React.FC = () => {
  const t = useTranslations('Footer')

  const { toast } = useToast()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <form onSubmit={onSubmit} noValidate className='flex gap-2 max-[435px]:flex-col'>
      <Input
        name='email'
        type='email'
        placeholder='Email'
        size={'md'}
        className='w-[344px] shadow-none max-[960px]:w-full'
      />
      <Button variant={'outline'} size={'md'} className='shadow-none'>
        {t('subscribe')}
      </Button>
    </form>
  )
}
