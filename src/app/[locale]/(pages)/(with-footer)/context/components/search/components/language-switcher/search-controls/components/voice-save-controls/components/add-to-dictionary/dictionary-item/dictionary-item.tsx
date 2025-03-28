import { ArrowUpNarrowWide } from 'lucide-react'
import { useShallow } from 'zustand/shallow'

import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui'

import { useWordAdd } from '@/hooks'

import { useContextStore } from '@/store'

interface DictionaryItemProps {
  userId: string
  dictionary: IDictionary
  searchFromParam: string
  fromFromParam: string
}

export const DictionaryItem: React.FC<DictionaryItemProps> = ({
  dictionary,
  searchFromParam,
  fromFromParam,
  userId,
}: DictionaryItemProps) => {
  const { mutate: addWord } = useWordAdd(dictionary.id, userId)

  const { translations } = useContextStore(
    useShallow(state => ({
      translations: state.translations,
    })),
  )

  return (
    <DropdownMenuItem
      key={dictionary.id}
      className='cursor-pointer truncate'
      onClick={() =>
        addWord({
          word: searchFromParam.trim().toLowerCase(),
          dictionaryId: dictionary.id,
          translations: translations,
          language: fromFromParam,
        })
      }
    >
      {dictionary.title}
      {dictionary.words.find(word => word.word === searchFromParam) && (
        <DropdownMenuShortcut>
          <ArrowUpNarrowWide className='size-5' />
        </DropdownMenuShortcut>
      )}
    </DropdownMenuItem>
  )
}
