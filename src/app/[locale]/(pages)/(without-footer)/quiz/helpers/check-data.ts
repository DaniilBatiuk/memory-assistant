import { headers } from 'next/headers'

import { getDictionary } from '@/actions'

import { LINKS, QUIZ_OPTIONS, QUIZ_QUANTITY } from '@/constants'

import { getUserSession, isOlderThan24Hours } from '@/helpers'

import { redirect } from '@/i18n'

interface CheckDataProps {
  type?: string
  quantity?: string
  dictionaryId?: string
}

export const checkData = async ({
  type,
  quantity,
  dictionaryId,
}: CheckDataProps): Promise<{
  dictionary: IDictionary
  filteredDictionary: IDictionary
  decodedType: string
}> => {
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

  let filteredDictionary: IDictionary = { ...dictionary }

  switch (decodedQuantity) {
    case QUIZ_QUANTITY[0]:
      filteredDictionary = {
        ...dictionary,
        words: (dictionary.words = dictionary.words.filter(
          word => !isOlderThan24Hours(word.createdAt),
        )),
      }
      break
    case QUIZ_QUANTITY[1]:
      filteredDictionary = {
        ...dictionary,
        words: dictionary.words.slice(0, 20),
      }
      break
    case QUIZ_QUANTITY[2]:
      filteredDictionary = { ...dictionary }
      break
    default:
      break
  }

  if (QUIZ_OPTIONS[1] === decodedType) {
    filteredDictionary = {
      ...filteredDictionary,
      words: filteredDictionary.words.map(currentWord => ({
        ...currentWord,
        word: currentWord.translations.split(', ')[0],
        translations: currentWord.word,
      })),
    }
  }

  return { dictionary, filteredDictionary, decodedType }
}
