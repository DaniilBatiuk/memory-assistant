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

import { useDictionaryDelete } from '@/hooks'

import { UpdateDictionaryDialog } from '../../../update-dictionary-dialog/update-dictionary-dialog'

interface ActionDropDownProps {
  dictionary: IDictionary
  userId: string
}

export const ActionDropDown: React.FC<ActionDropDownProps> = ({
  dictionary,
  userId,
}: ActionDropDownProps) => {
  const t = useTranslations('Dictionaries')

  const { mutate: deleteDictionary, isPending: deleteDictionaryIsPending } =
    useDictionaryDelete(userId)

  const [openUpdateMenu, setOpenUpdateMenu] = useState(false)

  return (
    <>
      <UpdateDictionaryDialog
        userId={userId}
        openUpdateMenu={openUpdateMenu}
        setOpenUpdateMenu={setOpenUpdateMenu}
        dictionary={dictionary}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            aria-label='addition func'
            className='absolute right-0 top-3 [&_svg]:size-[1.3rem]'
          >
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start' alignOffset={-92} className='mr-[15px] w-32'>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setOpenUpdateMenu(true)} className='cursor-pointer'>
              {t('update')}
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer text-red focus:bg-red/10 focus:text-red'
              onClick={() => deleteDictionary(dictionary.id)}
              disabled={deleteDictionaryIsPending}
            >
              {t('delete')}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
