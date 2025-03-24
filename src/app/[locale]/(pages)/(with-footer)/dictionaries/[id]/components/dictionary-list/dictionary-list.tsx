'use client'

import { useQuery } from '@tanstack/react-query'

import { getDictionariesQueryOptions } from '@/lib'

import { NoDictionaries } from '../no-dictionaries/no-dictionaries'

import { DictionariesLoading } from './components/dictionaries-loading/dictionaries-loading'
import { DictionaryItem } from './components/dictionary-item/dictionary-item'

interface DictionaryListProps {
  userId: string
}

export const DictionaryList: React.FC<DictionaryListProps> = ({ userId }: DictionaryListProps) => {
  const { data: dictionaries, isPending } = useQuery(getDictionariesQueryOptions(userId))

  const hasDictionaryItems = dictionaries && dictionaries.length > 0

  return (
    <section>
      {isPending ? (
        <DictionariesLoading />
      ) : hasDictionaryItems ? (
        dictionaries.map(dictionary => (
          <DictionaryItem key={dictionary.id} dictionary={dictionary} userId={userId} />
        ))
      ) : (
        <NoDictionaries />
      )}
    </section>
  )
}
