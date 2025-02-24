import { useTranslations } from 'next-intl'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'

import { QUIZ_OPTIONS } from '@/constants'

interface QuizTypeDialogProps {
  children: React.ReactNode
  setType: React.Dispatch<React.SetStateAction<string | null>>
  setOpenTypeDialog: React.Dispatch<React.SetStateAction<boolean>>
  openTypeDialog: boolean
}

export const QuizTypeDialog: React.FC<QuizTypeDialogProps> = ({
  children,
  openTypeDialog,
  setType,
  setOpenTypeDialog,
}: QuizTypeDialogProps) => {
  const t = useTranslations('Dictionary')

  return (
    <Dialog open={openTypeDialog} onOpenChange={setOpenTypeDialog}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[450px]'>
        <DialogHeader>
          <DialogTitle>{t('quizOption.title')}</DialogTitle>
          <DialogDescription className='hidden'>{t('quizOption.title')}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col text-lg'>
          <button
            className='rounded-md p-[10px] text-left hover:bg-foreground/5'
            onClick={() => {
              setType(QUIZ_OPTIONS[0])
              setOpenTypeDialog(false)
            }}
          >
            {t('quizOption.translationSelect')}
          </button>
          <button
            className='rounded-md p-[10px] text-left hover:bg-foreground/5'
            onClick={() => {
              setType(QUIZ_OPTIONS[1])
              setOpenTypeDialog(false)
            }}
          >
            {t('quizOption.translationSelectReverse')}
          </button>
          <button
            className='rounded-md p-[10px] text-left hover:bg-foreground/5'
            onClick={() => {
              setType(QUIZ_OPTIONS[2])
              setOpenTypeDialog(false)
            }}
          >
            {t('quizOption.audioPerception')}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
