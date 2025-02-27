'use server'

import { headers } from 'next/headers'

import { LANGUAGE_CODE, LINKS } from '@/constants'

import { getUserSession } from '@/helpers'

import { redirect } from '@/i18n'

export const getUserOrRedirect = async (): Promise<IUser> => {
  const user = await getUserSession()

  const locale = (await headers()).get('x-next-intl-locale') || 'en'

  if (!user) {
    redirect({ href: LINKS.Home, locale })
    throw new Error(locale === LANGUAGE_CODE.English ? 'User not found' : 'Користувача не знайдено')
  }

  return user
}
