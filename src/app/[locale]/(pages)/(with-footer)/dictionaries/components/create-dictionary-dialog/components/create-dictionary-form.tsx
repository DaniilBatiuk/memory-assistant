import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input, Label } from '@/components/ui'

import { useDictionaryAdd } from '@/hooks'

import { CreateDictionary, dictionaryScheme } from '@/validators'

interface CreateDictionaryFormProps {
  userId: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CreateDictionaryForm: React.FC<CreateDictionaryFormProps> = ({
  userId,
  setIsOpen,
}: CreateDictionaryFormProps) => {
  const t = useTranslations('Dictionaries')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateDictionary>({
    resolver: zodResolver(dictionaryScheme(t)),
    defaultValues: {
      title: '',
      description: '',
    },
    mode: 'onSubmit',
  })

  const { mutate: addDictionary } = useDictionaryAdd(userId)

  const onSubmit = (data: CreateDictionary) => {
    addDictionary(data)
    setIsOpen(false)
    reset()
  }

  return (
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
          <ErrorMessage errors={errors} name='title' as={<p className='text-sm text-red'></p>} />
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
        {t('create')}
      </Button>
    </form>
  )
}
