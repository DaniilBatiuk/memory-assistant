import { useQuery } from '@tanstack/react-query'
import { Star } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useShallow } from 'zustand/shallow'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'

import { useContextStore } from '@/store'

import { getDictionariesQueryOptions } from '@/lib'

import { DictionaryItem } from './dictionary-item/dictionary-item'

interface AddToDictionaryProps {
  searchFromParam: string | null
  fromFromParam: string | null
}

export const AddToDictionary: React.FC<AddToDictionaryProps> = ({
  searchFromParam,
  fromFromParam,
}: AddToDictionaryProps) => {
  const t = useTranslations('Context')
  const { data: session } = useSession()

  const { data: dictionaries, isPending } = useQuery({
    ...getDictionariesQueryOptions(session?.user.id ?? ''),
    enabled: !!session?.user.id,
  })

  const { translations } = useContextStore(
    useShallow(state => ({
      translations: state.translations,
    })),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={
            !session?.user.id || !!!searchFromParam || !!!fromFromParam || translations.length === 0
          }
          variant='outline'
          size='iconLg'
          className='!ring-0 [&_svg]:size-[1.35rem]'
          aria-label='save'
          type='button'
        >
          <Star />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-[15px] w-56'>
        <DropdownMenuLabel>{t('myDictionaries')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {!!searchFromParam && !!fromFromParam && dictionaries && dictionaries.length > 0 ? (
            dictionaries.map(dictionary => (
              <DictionaryItem
                userId={session?.user.id ?? ''}
                key={dictionary.id}
                dictionary={dictionary}
                searchFromParam={searchFromParam}
                fromFromParam={fromFromParam}
              />
            ))
          ) : isPending ? (
            <div className='py-2 text-center'>{t('loading')}</div>
          ) : (
            <div className='py-2 text-center'>{t('noDictionariesText')}</div>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
