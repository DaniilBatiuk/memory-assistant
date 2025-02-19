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

import { UpdateDictionaryDialog } from '../../../../../update-dictionary-dialog/update-dictionary-dialog'

export const ActionDropDown: React.FC = () => {
  const t = useTranslations('Dictionaries')

  const [openUpdateMenu, setOpenUpdateMenu] = useState(false)

  return (
    <>
      <UpdateDictionaryDialog
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
        <DropdownMenuContent align='start' alignOffset={-92} className='mr-[15px] w-32'>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setOpenUpdateMenu(true)}>
              {t('update')}
            </DropdownMenuItem>
            <DropdownMenuItem className='text-red focus:bg-red/10 focus:text-red'>
              {t('delete')}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
