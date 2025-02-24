import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

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

import { useDictionaryUpdate } from '@/hooks'

import { UpdateDictionary, updateDictionarySchema } from '@/validators'

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateDictionary>({
    resolver: zodResolver(updateDictionarySchema(t)),
    defaultValues: {
      id: dictionary.id,
      title: dictionary.title,
      description: dictionary.description,
    },
    mode: 'onSubmit',
  })

  const { mutate: updateDictionary } = useDictionaryUpdate(userId)

  const onSubmit = (data: UpdateDictionary) => {
    updateDictionary(data)
    setOpenUpdateMenu(false)
  }
  return (
    <Dialog open={openUpdateMenu} onOpenChange={setOpenUpdateMenu}>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('updateTitle')}</DialogTitle>
          <DialogDescription className='hidden'>{t('createTitle')}</DialogDescription>
        </DialogHeader>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3'>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor='title' error={!!errors.title}>
                {t('createPlaceholder.name')}
              </Label>
              <Input
                error={!!errors.title}
                placeholder={t('createPlaceholder.name')}
                size='md'
                {...register('title')}
                className='!ring-0 focus:border-foreground'
                autoComplete='off'
              />
              <ErrorMessage
                errors={errors}
                name='title'
                as={<p className='text-sm text-red'></p>}
              />
            </div>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor='description' error={!!errors.description}>
                {t('createPlaceholder.description')}
              </Label>
              <Input
                error={!!errors.description}
                placeholder={t('createPlaceholder.description')}
                size='md'
                {...register('description')}
                className='!ring-0 focus:border-foreground'
                autoComplete='off'
              />
              <ErrorMessage
                errors={errors}
                name='description'
                as={<p className='text-sm text-red'></p>}
              />
            </div>
          </div>
          <Button size='md' className='mt-5 w-full' type='submit' disabled={isSubmitting}>
            {t('update')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
