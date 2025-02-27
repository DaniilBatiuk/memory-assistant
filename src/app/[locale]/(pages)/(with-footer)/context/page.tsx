import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'

import { metadataFactory } from '@/helpers'

import { Content } from './components/content/content'
import { ContextSkeleton } from './components/context-skeleton/context-skeleton'

export const metadata = metadataFactory('Context')

type SearchParams = Promise<{
  search?: string
  from?: string
  to?: string
}>

export default async function Context({ searchParams }: { searchParams: SearchParams }) {
  const { search, from, to } = await searchParams

  const t = await getTranslations('Context')

  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='adaptive-margin-bottom-20-30'>
        <h1 className='text-center font-bold adaptive-font-size-30-40 adaptive-margin-bottom-10-15'>
          {t('title')}
        </h1>
        <p className='text-center text-foreground/55 adaptive-font-size-16-18'>{t('subtitle')}</p>
      </div>

      <Suspense fallback={<ContextSkeleton />}>
        <Content search={search} from={from} to={to} />
      </Suspense>
    </div>
  )
}
