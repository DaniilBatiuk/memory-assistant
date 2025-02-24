import { headers } from 'next/headers'

import { getDictionary } from '@/actions'

import { LINKS, QUIZ_OPTIONS, QUIZ_QUANTITY } from '@/constants'

import { getUserSession } from '@/helpers'

import { redirect } from '@/i18n'

interface CheckDataProps {
  type?: string
  quantity?: string
  dictionaryId?: string
}

export const checkData = async ({ type, quantity, dictionaryId }: CheckDataProps) => {
  const decodedType = type ? decodeURIComponent(type) : ''
  const decodedQuantity = quantity ? decodeURIComponent(quantity) : ''

  const dictionary = await getDictionary(dictionaryId ?? '')
  const user = await getUserSession()
  const locale = (await headers()).get('x-next-intl-locale') || 'en'

  if (
    !user ||
    !dictionary ||
    !QUIZ_OPTIONS.includes(decodedType) ||
    !QUIZ_QUANTITY.includes(decodedQuantity)
  ) {
    redirect({ href: LINKS.Home, locale })
    throw new Error('Something went wrong')
  }

  return { dictionary }
}
