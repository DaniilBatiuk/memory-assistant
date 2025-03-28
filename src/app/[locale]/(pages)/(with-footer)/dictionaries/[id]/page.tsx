import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui'

import { metadataFactory } from '@/helpers'

import { prisma } from '@/lib'

import { CreateDictionaryDialog } from './components/create-dictionary-dialog/create-dictionary-dialog'
import { DictionaryList } from './components/dictionary-list/dictionary-list'

export const metadata = metadataFactory('Dictionaries')

export async function generateStaticParams() {
  const users = await prisma.user.findMany()
  return users.map(user => ({
    id: user.id,
  }))
}

export default async function Dictionaries({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  const t = await getTranslations('Dictionaries')

  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
        <h1 className='font-bold adaptive-font-size-30-40'>{t('title')}</h1>
        <CreateDictionaryDialog userId={id}>
          <Button>{t('create')}</Button>
        </CreateDictionaryDialog>
      </div>
      <DictionaryList userId={id} />
    </div>
  )
}
