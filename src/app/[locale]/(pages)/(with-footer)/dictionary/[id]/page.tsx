import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { headers } from 'next/headers'

import { LINKS } from '@/constants'

import { getUserSession } from '@/helpers'

import { getDictionaryQueryOptions, getQueryClient } from '@/lib'

import { redirect } from '@/i18n'

import { DictionaryControl } from './components/dictionary-control/dictionary-control'
import { WordsList } from './components/words-list/words-list'

export default async function Dictionary({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  const user = await getUserSession()

  const locale = (await headers()).get('x-next-intl-locale') || 'en'

  if (!user) {
    redirect({ href: LINKS.Home, locale })
    return null
  }
  const queryClient = getQueryClient()

  queryClient.prefetchQuery(getDictionaryQueryOptions(id))

  return (
    <div className='container adaptive-margin-top-20-60'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DictionaryControl dictionaryId={id} />
        <WordsList dictionaryId={id} />
      </HydrationBoundary>
    </div>
  )
}
