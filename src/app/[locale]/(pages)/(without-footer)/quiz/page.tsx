import { metadataFactory } from '@/helpers'

import { Steps } from './components/step/steps'
import { checkData } from './helpers/check-data'
import { createShakenWords } from './helpers/create-shaken-words'

export const metadata = metadataFactory('Quiz')

type SearchParams = Promise<{
  type?: string
  quantity?: string
  dictionaryId?: string
}>

export default async function Quiz({ searchParams }: { searchParams: SearchParams }) {
  const { type, quantity, dictionaryId } = await searchParams
  const { dictionary, filteredDictionary, decodedType } = await checkData({
    type,
    quantity,
    dictionaryId,
  })

  const shakenWords: IShakenWord[] = createShakenWords(filteredDictionary)

  return (
    <main className='container relative flex-auto adaptive-margin-top-40-60'>
      <Steps shakenWords={shakenWords} dictionaryId={dictionary.id} type={decodedType} />
    </main>
  )
}
