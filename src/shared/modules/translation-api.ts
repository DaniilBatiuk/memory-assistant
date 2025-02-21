import { LanguageCode } from '@/constants'

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

      console.log('CONTEXT', response)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      return response
    },
  ),
  getSuggestion: errorCatch(
    async (
      { signal }: { signal: AbortSignal },
      {
        search,
        from,
        to,
      }: {
        search: string
        from: keyof typeof LanguageCode
        to: keyof typeof LanguageCode
      },
    ): Promise<string[]> => {
      const response = await fetch('/api/suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
        body: JSON.stringify({
          search: search,
          source_lang: LanguageCode[from],
          target_lang: LanguageCode[to],
        }),
      }).then(res => res.json())
      console.log('getSuggestion', response)
      return response
    },
  ),
}
