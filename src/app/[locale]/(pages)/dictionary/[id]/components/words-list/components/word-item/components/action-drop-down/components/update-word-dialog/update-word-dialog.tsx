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
  Input,
  Label,
} from '@/components/ui'

interface UpdateWordDialogProps {
  openUpdateMenu: boolean
  setOpenUpdateMenu: Dispatch<SetStateAction<boolean>>
}

export const UpdateWordDialog: React.FC<UpdateWordDialogProps> = ({
  openUpdateMenu,
  setOpenUpdateMenu,
}: UpdateWordDialogProps) => {
  const t = useTranslations('Dictionary')

  return (
    <Dialog open={openUpdateMenu} onOpenChange={setOpenUpdateMenu}>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('update')}</DialogTitle>
          <DialogDescription className='hidden'>{t('update')}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-3'>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>{t('updatePlaceholder.word')}</Label>
            <Input
              placeholder={t('updatePlaceholder.word')}
              size={'md'}
              name='search'
              className='!ring-0 focus:border-foreground'
              autoComplete='off'
            />
          </div>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>{t('updatePlaceholder.translations')}</Label>
            <Input
              placeholder={t('updatePlaceholder.translations')}
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
