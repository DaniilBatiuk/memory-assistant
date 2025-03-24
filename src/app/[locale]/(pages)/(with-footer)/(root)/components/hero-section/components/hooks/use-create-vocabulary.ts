import { signIn, useSession } from 'next-auth/react'

import { LINKS } from '@/constants'

import { useRouter } from '@/i18n'

export const useCreateAVocabulary = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const createAVocabulary = () => {
    if (session) {
      router.push(LINKS.Dictionaries + '/' + session.user.id)
    } else {
      signIn('google', {
        callbackUrl: LINKS.Home,
        redirect: true,
      })
    }
  }

  return { createAVocabulary }
}
