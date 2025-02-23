import { getTranslations } from 'next-intl/server'

import { isSuccessResponse } from '@/helpers'

import { NotFoundTranslation } from './components/not-found-translation/not-found-translation'
import { Search } from './components/search/search'
import { TranslationsList } from './components/translations-list/translations-list'
import { getData } from './helpers/get-data'

type SearchParams = Promise<{
  search?: string
  from?: string
  to?: string
}>

export default async function Context({ searchParams }: { searchParams: SearchParams }) {
  const { search, from, to } = await searchParams

  const translations = await getData({ search, from, to })

  const t = await getTranslations('Context')

  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='adaptive-margin-bottom-20-30'>
        <h1 className='text-center font-bold adaptive-font-size-30-40 adaptive-margin-bottom-10-15'>
          {t('title')}
        </h1>
        <p className='text-center text-foreground/55 adaptive-font-size-16-18'>{t('subtitle')}</p>
      </div>
      <Search />
      {isSuccessResponse(translations) && translations.data.def.length > 0 ? (
        <TranslationsList title={t('translations')} translations={translations.data.def} />
      ) : (
        <NotFoundTranslation
          textToTranslate={search + ' ' + t('notFound')}
          translations={translations}
        />
      )}
    </div>
  )
}
