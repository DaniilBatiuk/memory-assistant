import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui'

import { UpdateDictionaryForm } from './components/update-dictionary-form'

interface UpdateDictionaryDialogProps {
  openUpdateMenu: boolean
  setOpenUpdateMenu: Dispatch<SetStateAction<boolean>>
  dictionary: IDictionary
  userId: string
}

export const UpdateDictionaryDialog: React.FC<UpdateDictionaryDialogProps> = ({
  openUpdateMenu,
  setOpenUpdateMenu,
  dictionary,
  userId,
}: UpdateDictionaryDialogProps) => {
  const t = useTranslations('Dictionaries')

  return (
    <Dialog open={openUpdateMenu} onOpenChange={setOpenUpdateMenu}>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('updateTitle')}</DialogTitle>
          <DialogDescription className='hidden'>{t('createTitle')}</DialogDescription>
        </DialogHeader>
        <UpdateDictionaryForm
          dictionary={dictionary}
          userId={userId}
          setOpenUpdateMenu={setOpenUpdateMenu}
        />
      </DialogContent>
    </Dialog>
  )
}
