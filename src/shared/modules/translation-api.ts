import { errorCatch } from '@/helpers'

import { reverso } from '../lib/reverso'

export const translationApi = {
  getTranslation: errorCatch(
    async ({
      search,
      from,
      to,
    }: {
      search: string
      from: string
      to: string
    }): Promise<ITranslation> => {
      const response: ITranslation = await reverso.getTranslation(search, from, to)

      if (!response.ok) {
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
