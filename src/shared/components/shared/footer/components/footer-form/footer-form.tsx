'use client'

import { Button, Input } from '@/components/ui'

import { useSubscribe } from './hooks/use-subscribe'

export const FooterForm: React.FC = () => {
  const { onSubscribe, t } = useSubscribe()

  return (
    <form onSubmit={onSubscribe} noValidate className='flex gap-2 max-[435px]:flex-col'>
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
