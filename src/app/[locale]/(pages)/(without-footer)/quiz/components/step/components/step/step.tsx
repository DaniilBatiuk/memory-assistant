import { Volume2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

import { QUIZ_OPTIONS } from '@/constants'

import { playAudio } from '@/helpers'

import { RadioGroupBlock } from '../../../radio-group/radio-group'

interface StepProps {
  shakenWordsArray: IShakenWord[]
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  setResult: React.Dispatch<React.SetStateAction<boolean[]>>
  type: string
}

export const Step: React.FC<StepProps> = ({
  shakenWordsArray,
  step,
  setStep,
  setResult,
  type,
}: StepProps) => {
  const t = useTranslations('Quiz')

  return (
    <>
      <div className='flex flex-col'>
        {type === QUIZ_OPTIONS[2] ? (
          <Button
            variant='outline'
            size='iconExtraLg'
            className='mx-auto [&_svg]:size-[1.7rem]'
            aria-label='voice'
            type='button'
            onClick={() =>
              playAudio({
                word: shakenWordsArray[step].word,
                lang: shakenWordsArray[step].language,
              })
            }
          >
            <Volume2 />
          </Button>
        ) : (
          <h1 className='text-center font-bold adaptive-font-size-30-40'>
            {shakenWordsArray[step].word}
          </h1>
        )}
        <p className='mt-2 text-center text-foreground/55 adaptive-font-size-16-18'>
          {t('subtitle')}
        </p>
      </div>
      <div className='absolute right-[15px] top-[-20px]'>
        {step}/{shakenWordsArray.length}
      </div>
      <RadioGroupBlock
        setStep={setStep}
        setResult={setResult}
        variants={shakenWordsArray[step].variants}
      />
    </>
  )
}
