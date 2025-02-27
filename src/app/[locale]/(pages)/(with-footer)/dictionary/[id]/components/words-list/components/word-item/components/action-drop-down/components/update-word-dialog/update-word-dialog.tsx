'use client'

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

import { useWordUpdate } from '@/hooks'

import { UpdateWord, wordScheme } from '@/validators'

interface UpdateWordDialogProps {
  openUpdateMenu: boolean
  setOpenUpdateMenu: Dispatch<SetStateAction<boolean>>
  word: IWordDto
}

export const UpdateWordDialog: React.FC<UpdateWordDialogProps> = ({
  openUpdateMenu,
  setOpenUpdateMenu,
  word,
}: UpdateWordDialogProps) => {
  const t = useTranslations('Dictionary')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateWord>({
    resolver: zodResolver(wordScheme(t)),
    defaultValues: {
      id: word.id,
      word: word.word,
      translations: word.translations,
    },
    mode: 'onSubmit',
  })

  const { mutate: updateWord } = useWordUpdate(word.dictionaryId)

  const onSubmit = (data: UpdateWord) => {
    updateWord(data)
    setOpenUpdateMenu(false)
  }

  return (
    <Dialog open={openUpdateMenu} onOpenChange={setOpenUpdateMenu}>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{t('update')}</DialogTitle>
          <DialogDescription className='hidden'>{t('update')}</DialogDescription>
        </DialogHeader>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3'>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor='word' error={!!errors.word}>
                {t('updatePlaceholder.word')}
              </Label>
              <Input
                error={!!errors.word}
                placeholder={t('updatePlaceholder.word')}
                size={'md'}
                {...register('word')}
                className='!ring-0 focus:border-foreground'
                autoComplete='off'
              />
              <ErrorMessage errors={errors} name='word' as={<p className='text-sm text-red'></p>} />
            </div>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor='translations' error={!!errors.translations}>
                {t('updatePlaceholder.translations')}
              </Label>
              <Input
                error={!!errors.translations}
                placeholder={t('updatePlaceholder.translations')}
                size={'md'}
                {...register('translations')}
                className='!ring-0 focus:border-foreground'
                autoComplete='off'
              />
              <ErrorMessage
                errors={errors}
                name='translations'
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
