import { errorCatch } from '@/helpers'

import { reverso } from '../lib/reverso'

export const translationApi = {
  getTranslation: errorCatch(
    async ({
      textToTranslate,
      langFrom,
      langTo,
    }: {
      textToTranslate: string
      langFrom: string
      langTo: string
    }): Promise<ITranslation> => {
      const response: ITranslation = await reverso.getTranslation(textToTranslate, langFrom, langTo)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      return response
    },
  ),
}
