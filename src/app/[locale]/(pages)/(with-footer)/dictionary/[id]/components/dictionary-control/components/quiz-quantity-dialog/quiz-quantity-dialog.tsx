import { useTranslations } from 'next-intl'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui'

import { LINKS, QUIZ_QUANTITY } from '@/constants'

import { cn } from '@/lib'

import { Link } from '@/i18n'

interface QuizQuantityDialogProps {
  type: string
  setOpenQuantityDialog: React.Dispatch<React.SetStateAction<boolean>>
  openQuantityDialog: boolean
  dictionary: IDictionary
}

export const QuizQuantityDialog: React.FC<QuizQuantityDialogProps> = ({
  type,
  setOpenQuantityDialog,
  openQuantityDialog,
  dictionary,
}: QuizQuantityDialogProps) => {
  const t = useTranslations('Dictionary')

  return (
    <Dialog open={openQuantityDialog} onOpenChange={setOpenQuantityDialog}>
      <DialogContent className='max-w-[450px]'>
        <DialogHeader>
          <DialogTitle>{t('quizQuantity.title')}</DialogTitle>
          <DialogDescription className='hidden'>{t('quizQuantity.title')}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col text-lg'>
          <Link
            href={
              LINKS.Quiz +
              `?dictionaryId=${dictionary.id}&type=${type}&quantity=${QUIZ_QUANTITY[0]}`
            }
            className={cn('relative rounded-md p-[10px] text-left hover:bg-foreground/5', {
              'pointer-events-none opacity-20': (() => {
                const createdAt = new Date(dictionary.words[0].createdAt).getTime()
                const now = Date.now()
                const diffInHours = (now - createdAt) / (1000 * 60 * 60)

                return diffInHours >= 24
              })(),
            })}
          >
            {t('quizQuantity.addedToday')}
          </Link>
          <Link
            href={LINKS.Quiz + `?dictionaryId=${dictionary.id}&type=${type}${QUIZ_QUANTITY[1]}`}
            className={cn('rounded-md p-[10px] text-left hover:bg-foreground/5', {
              'pointer-events-none opacity-20': dictionary.words.length < 20,
            })}
          >
            {t('quizQuantity.20Words')}
          </Link>
          <Link
            href={LINKS.Quiz + `?dictionaryId=${dictionary.id}&type=${type}${QUIZ_QUANTITY[2]}`}
            className='rounded-md p-[10px] text-left hover:bg-foreground/5'
          >
            {t('quizQuantity.allWords')}
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
