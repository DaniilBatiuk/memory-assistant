import { getTranslations } from 'next-intl/server'

import { isSuccessResponse } from '@/helpers'

import { getData } from '../../helpers/get-data'
import { NotFoundTranslation } from '../not-found-translation/not-found-translation'
import { Search } from '../search/search'
import { TranslationsList } from '../translations-list/translations-list'

interface ContentProps {
  search?: string
  from?: string
  to?: string
}

export const Content: React.FC<ContentProps> = async ({ search, from, to }: ContentProps) => {
  const translations = await getData({ search, from, to })
  const t = await getTranslations('Context')

  return (
    <>
      <Search />
      {isSuccessResponse(translations) && translations.data.def.length > 0 ? (
        <TranslationsList title={t('translations')} translations={translations.data.def} />
      ) : (
        <NotFoundTranslation
          textToTranslate={search + ' ' + t('notFound')}
          translations={translations}
        />
      )}
    </>
  )
}
