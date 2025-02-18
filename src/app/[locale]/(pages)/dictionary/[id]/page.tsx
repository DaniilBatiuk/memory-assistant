import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui'

import { WordsList } from './components/words-list/words-list'

export default async function Dictionary() {
  const t = await getTranslations('Dictionary')

  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
        <div className='flex items-end gap-3'>
          <h1 className='font-bold adaptive-font-size-30-40'>{t('title')}</h1>
          <p className='text-foreground/55 adaptive-font-size-14-16'>1243 word</p>
        </div>
        <Button>{t('quiz')}</Button>
      </div>
      <WordsList />
      {/* <EmptyDictionary /> */}
    </div>
  )
}
