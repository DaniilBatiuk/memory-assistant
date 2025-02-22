import { ArrowUpNarrowWide } from 'lucide-react'

import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/ui'

import { LanguageCode } from '@/constants'

import { useWordAdd } from '@/hooks'

interface DictionaryItemProps {
  dictionary: IDictionary
  searchFromParam: string
  fromFromParam: string
}

export const DictionaryItem: React.FC<DictionaryItemProps> = ({
  dictionary,
  searchFromParam,
  fromFromParam,
}: DictionaryItemProps) => {
  const { mutate: addWord } = useWordAdd(dictionary.id)

  return (
    <DropdownMenuItem
      key={dictionary.id}
      className='cursor-pointer truncate'
      onClick={() =>
        addWord({
          word: searchFromParam,
          dictionaryId: dictionary.id,
          translations: 'слово, словарь, словокоб, столь',
          language: LanguageCode[fromFromParam],
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
