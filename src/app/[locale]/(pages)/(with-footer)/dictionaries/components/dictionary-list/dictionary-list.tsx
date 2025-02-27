'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { getDictionariesQueryOptions } from '@/lib'

import { NoDictionaries } from '../no-dictionaries/no-dictionaries'

import { DictionaryItem } from './components/dictionary-item/dictionary-item'

interface DictionaryListProps {
  userId: string
}

export const DictionaryList: React.FC<DictionaryListProps> = ({ userId }: DictionaryListProps) => {
  const { data: dictionaries } = useSuspenseQuery(getDictionariesQueryOptions(userId))

  return (
    <section>
      {dictionaries && dictionaries.length > 0 ? (
        dictionaries.map(dictionary => (
          <DictionaryItem key={dictionary.id} dictionary={dictionary} userId={userId} />
        ))
      ) : (
        <NoDictionaries />
      )}
    </section>
  )
}
