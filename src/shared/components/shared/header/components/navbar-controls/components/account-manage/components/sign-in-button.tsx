import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

import { LINKS } from '@/constants'

export const SignInButton: React.FC = () => {
  const t = useTranslations('Header')

  return (
    <Button
      className='max-[550px]:hidden'
      onClick={() =>
        signIn('google', {
          callbackUrl: LINKS.Home,
          redirect: true,
        })
      }
    >
      {t('signIn')}
    </Button>
  )
}
