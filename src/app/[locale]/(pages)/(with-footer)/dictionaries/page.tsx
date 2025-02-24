import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getTranslations } from 'next-intl/server'
import { headers } from 'next/headers'

import { Button } from '@/components/ui'

import { LINKS } from '@/constants'

import { getUserSession, metadataFactory } from '@/helpers'

import { getDictionariesQueryOptions, getQueryClient } from '@/lib'

import { redirect } from '@/i18n'

import { CreateDictionaryDialog } from './components/create-dictionary-dialog/create-dictionary-dialog'
import { DictionaryList } from './components/dictionary-list/dictionary-list'

export const metadata = metadataFactory('Dictionaries')

export default async function Dictionaries() {
  const t = await getTranslations('Dictionaries')

  const user = await getUserSession()

  const locale = (await headers()).get('x-next-intl-locale') || 'en'

  if (!user) {
    redirect({ href: LINKS.Home, locale })
    return null
  }

  const queryClient = getQueryClient()

  queryClient.prefetchQuery(getDictionariesQueryOptions(user.id))

  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
        <h1 className='font-bold adaptive-font-size-30-40'>{t('title')}</h1>
        <CreateDictionaryDialog userId={user.id}>
          <Button>{t('create')}</Button>
        </CreateDictionaryDialog>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DictionaryList userId={user.id} />
      </HydrationBoundary>
    </div>
  )
}
