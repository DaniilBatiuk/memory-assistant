'use client'

import { useQuery } from '@tanstack/react-query'

import { getDictionaryQueryOptions } from '@/lib'

import { EmptyDictionary } from '../empty-dictionary/empty-dictionary'

import { WordItem } from './components/word-item/word-item'
import { WordsLoading } from './components/words-loading/words-loading'

interface WordsListProps {
  dictionaryId: string
}

export const WordsList: React.FC<WordsListProps> = ({ dictionaryId }: WordsListProps) => {
  const { data: dictionary, isPending } = useQuery(getDictionaryQueryOptions(dictionaryId))

  const hasWords = dictionary && dictionary.words.length > 0

  if (isPending) return <WordsLoading />

  return (
    <section>
      {hasWords ? (
        dictionary.words.map(word => <WordItem word={word} key={word.id} />)
      ) : (
        <EmptyDictionary />
      )}
    </section>
  )
}
