'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { getDictionaryQueryOptions } from '@/lib'

import { EmptyDictionary } from '../empty-dictionary/empty-dictionary'

import { WordItem } from './components/word-item/word-item'

interface WordsListProps {
  dictionaryId: string
}

export const WordsList: React.FC<WordsListProps> = ({ dictionaryId }: WordsListProps) => {
  const { data: dictionary } = useSuspenseQuery(getDictionaryQueryOptions(dictionaryId))

  return (
    <section>
      {dictionary && dictionary.words.length > 0 ? (
        dictionary.words.map(word => <WordItem word={word} key={word.id} />)
      ) : (
        <EmptyDictionary />
      )}
    </section>
  )
}
