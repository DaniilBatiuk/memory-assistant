import { LANGUAGE_CODE } from '@/constants'

import { errorCatch } from '@/helpers'

import { reverso } from '../lib/reverso'

export const translationApi = {
  getTranslationText: errorCatch(
    async ({
      search,
      from,
      to,
    }: {
      search: string
      from: string
      to: string
    }): Promise<ITranslationText> => {
      const response: ITranslationText = await reverso.getTranslation(search, from, to)

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      return response
    },
  ),
  getTranslation: errorCatch(
    async ({
      search,
      from,
      to,
    }: {
      search: string
      from: string
      to: string
    }): Promise<ITranslationDto> => {
      const response = (await fetch(
        `${process.env.NEXT_PUBLIC_YANDEX_API_URL}/lookup?key=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=${LANGUAGE_CODE[from]}-${LANGUAGE_CODE[to]}&text=${search}`,
      ).then(res => res.json())) as ITranslationDto

      if (response.code !== 200) {
        throw new Error('Something went wrong')
      }

      return response
    },
  ),
  getContext: errorCatch(
    async ({
      search,
      from,
      to,
    }: {
      search: string
      from: string
      to: string
    }): Promise<IContext> => {
      const response: IContext = await reverso.getContext(search, from, to)

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      return response
    },
  ),
}
