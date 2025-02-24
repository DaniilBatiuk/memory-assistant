'use client'

import { EllipsisVertical } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'

import { useWordDelete, useWordUpdateCreatedAt } from '@/hooks'

import { UpdateWordDialog } from './components/update-word-dialog/update-word-dialog'

interface ActionDropDownProps {
  word: IWordDto
}

export const ActionDropDown: React.FC<ActionDropDownProps> = ({ word }: ActionDropDownProps) => {
  const t = useTranslations('Dictionary')

  const [openUpdateMenu, setOpenUpdateMenu] = useState(false)
  const { mutate: deleteWord, isPending: deleteWordIsPending } = useWordDelete(word.dictionaryId)
  const { mutate: updateWordCreatedAt, isPending: updateWordCreatedAtIsPending } =
    useWordUpdateCreatedAt(word.dictionaryId)
  return (
    <>
      <UpdateWordDialog
        word={word}
        openUpdateMenu={openUpdateMenu}
        setOpenUpdateMenu={setOpenUpdateMenu}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            aria-label='addition func'
            className='absolute right-0 top-3 !ring-0 [&_svg]:size-[1.3rem]'
          >
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='start'
          alignOffset={-92}
          className='mr-[15px] w-32'
          onClick={e => e.stopPropagation()}
        >
          <DropdownMenuGroup>
            <DropdownMenuItem
              className='cursor-pointer'
              disabled={updateWordCreatedAtIsPending}
              onClick={() => updateWordCreatedAt(word.id)}
            >
              {t('dragToTop')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenUpdateMenu(true)} className='cursor-pointer'>
              {t('update')}
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer text-red focus:bg-red/10 focus:text-red'
              onClick={() => deleteWord(word.id)}
              disabled={deleteWordIsPending}
            >
              {t('delete')}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
