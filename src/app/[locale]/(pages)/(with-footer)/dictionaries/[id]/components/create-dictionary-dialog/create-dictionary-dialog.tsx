'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'

import { CreateDictionaryForm } from './components/create-dictionary-form'

interface CreateDictionaryDialogProps {
  children: React.ReactNode
  userId: string
}

export const CreateDictionaryDialog: React.FC<CreateDictionaryDialogProps> = ({
  children,
  userId,
}: CreateDictionaryDialogProps) => {
  const t = useTranslations('Dictionaries')

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('createTitle')}</DialogTitle>
          <DialogDescription className='hidden'>{t('createTitle')}</DialogDescription>
        </DialogHeader>
        <CreateDictionaryForm userId={userId} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}
