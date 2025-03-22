'use client'

import { signIn, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

import { LINKS } from '@/constants'

import { useRouter } from '@/i18n'

export const CreateAVocabulary: React.FC = () => {
  const t = useTranslations('HomePage')
  const { data: session } = useSession()
  const router = useRouter()

  const createAVocabulary = () => {
    if (session) {
      router.push(LINKS.Dictionaries)
    } else {
      signIn('google', {
        callbackUrl: LINKS.Home,
        redirect: true,
      })
    }
  }

  return (
    <Button size='lg' onClick={createAVocabulary}>
      {t('createAVocabulary')}
    </Button>
  )
}
