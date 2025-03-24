import { metadataFactory } from '@/helpers'

import { prisma } from '@/lib'

import { DictionaryControl } from './components/dictionary-control/dictionary-control'
import { WordsList } from './components/words-list/words-list'

export async function generateStaticParams() {
  const dictionaries = await prisma.dictionary.findMany()
  return dictionaries.map(dictionary => ({
    id: dictionary.id,
  }))
}
export const metadata = metadataFactory('Dictionary')

export default async function Dictionary({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  return (
    <div className='container adaptive-margin-top-20-60'>
      <DictionaryControl dictionaryId={id} />
      <WordsList dictionaryId={id} />
    </div>
  )
}
