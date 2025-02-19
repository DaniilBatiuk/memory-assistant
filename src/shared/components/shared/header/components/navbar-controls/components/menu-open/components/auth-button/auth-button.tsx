'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import { Button, Skeleton } from '@/components/ui'

import { LINKS } from '@/constants'

export const AuthButton: React.FC = () => {
  const t = useTranslations('Header')

  const { data: session } = useSession()

  if (session === undefined)
    return (
      <Skeleton className='full-width absolute bottom-[15px] mx-[15px] h-12 min-[551px]:hidden' />
    )

  return (
    <>
      {session ? (
        <Button
          size='md'
          className='full-width absolute bottom-[15px] mx-[15px] min-[551px]:hidden'
          onClick={() => signOut({ callbackUrl: LINKS.Home })}
        >
          {t('signOut')}
        </Button>
      ) : (
        <Button
          size='md'
          className='full-width absolute bottom-[15px] mx-[15px] min-[551px]:hidden'
          onClick={() =>
            signIn('google', {
              callbackUrl: LINKS.Home,
              redirect: true,
            })
          }
        >
          {t('signIn')}
        </Button>
      )}
    </>
  )
}
