import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui'

import { CreateDictionaryDialog } from './components/create-dictionary-dialog/create-dictionary-dialog'
import { DictionaryList } from './components/dictionary-list/dictionary-list'

export default async function Dictionaries() {
  const t = await getTranslations('Dictionaries')

  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
        <h1 className='font-bold adaptive-font-size-30-40'>{t('title')}</h1>
        <CreateDictionaryDialog>
          <Button>{t('create')}</Button>
        </CreateDictionaryDialog>
      </div>
      <DictionaryList />
      {/* <NoDictionaries noDictionariesText={t('noDictionariesText')} /> */}
    </div>
  )
}
