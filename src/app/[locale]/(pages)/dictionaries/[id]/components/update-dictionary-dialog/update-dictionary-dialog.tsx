'use client'

import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components/ui'

interface UpdateDictionaryDialogProps {
  children: React.ReactNode
  openUpdateMenu: boolean
  setOpenUpdateMenu: Dispatch<SetStateAction<boolean>>
}

export const UpdateDictionaryDialog: React.FC<UpdateDictionaryDialogProps> = ({
  children,
  openUpdateMenu,
  setOpenUpdateMenu,
}: UpdateDictionaryDialogProps) => {
  const t = useTranslations('Dictionaries')

  return (
    <Dialog open={openUpdateMenu} onOpenChange={setOpenUpdateMenu}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('updateTitle')}</DialogTitle>
          <DialogDescription className='hidden'>{t('createTitle')}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-3'>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>{t('createPlaceholder.name')}</Label>
            <Input
              placeholder={t('createPlaceholder.name')}
              size={'md'}
              name='search'
              className='!ring-0 focus:border-foreground'
              autoComplete='off'
            />
          </div>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>{t('createPlaceholder.description')}</Label>
            <Input
              placeholder={t('createPlaceholder.description')}
              size={'md'}
              name='search'
              className='!ring-0 focus:border-foreground'
              autoComplete='off'
            />
          </div>
        </div>
        <Button size='md' className='mt-1 w-full'>
          {t('update')}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
