import { Step } from './components/step/step'
import { checkData } from './helpers/check-data'
import { createShakenWords } from './helpers/create-shaken-words'

type SearchParams = Promise<{
  type?: string
  quantity?: string
  dictionaryId?: string
}>

export default async function Quiz({ searchParams }: { searchParams: SearchParams }) {
  const { type, quantity, dictionaryId } = await searchParams
  const { dictionary } = await checkData({ type, quantity, dictionaryId })

  const shakenWords: IShakenWord[] = createShakenWords(dictionary)

  return (
    <section className='container relative flex-auto adaptive-margin-top-40-60'>
      <Step shakenWords={shakenWords} dictionaryId={dictionary.id} />
    </section>
  )
}
