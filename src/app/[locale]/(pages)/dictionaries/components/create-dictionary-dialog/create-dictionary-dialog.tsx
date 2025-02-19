import { getTranslations } from 'next-intl/server'

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

interface CreateDictionaryDialogProps {
  children: React.ReactNode
}

export const CreateDictionaryDialog: React.FC<CreateDictionaryDialogProps> = async ({
  children,
}: CreateDictionaryDialogProps) => {
  const t = await getTranslations('Dictionaries')

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('createTitle')}</DialogTitle>
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
          {t('create')}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
