'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

export const AccountManage: React.FC = () => {
  const t = useTranslations('Header')

  return (
    <>
      <Button className='max-[550px]:hidden'>{t('signIn')}</Button>
    </>
  )
}
