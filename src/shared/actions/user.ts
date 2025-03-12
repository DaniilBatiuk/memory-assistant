'use server'

import { headers } from 'next/headers'

import { LINKS } from '@/constants'

import { getUserSession } from '@/helpers'

import { redirect } from '@/i18n'

export const getUserOrRedirect = async () => {
  const user = await getUserSession()

  const locale = (await headers()).get('x-next-intl-locale') || 'en'

  if (!user) {
    redirect({ href: LINKS.Home, locale })
  }

  return { user: user!, locale }
}
