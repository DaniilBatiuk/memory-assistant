import { metadataFactory } from '@/helpers'

import { Step } from './components/step/step'
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
    <section className='full-height-without-header container relative flex-auto adaptive-padding-top-40-60'>
      <Step shakenWords={shakenWords} dictionaryId={dictionary.id} type={decodedType} />
    </section>
  )
}
