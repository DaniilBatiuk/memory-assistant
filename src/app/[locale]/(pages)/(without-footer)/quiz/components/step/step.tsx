'use client'

import { Volume2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui'

import { QUIZ_OPTIONS } from '@/constants'

import { playAudio } from '@/helpers'

import { RadioGroupBlock } from '../radio-group/radio-group'

import { Statistic } from './components/statistic/statistic'

interface StepProps {
  shakenWords: IShakenWord[]
  dictionaryId: string
  type: string
}

export const Step: React.FC<StepProps> = ({ shakenWords, dictionaryId, type }: StepProps) => {
  const [shakenWordsArray, setShakenWordsArray] = useState<IShakenWord[]>(shakenWords)
  const [step, setStep] = useState(0)
  const [result, setResult] = useState<boolean[]>([])

  console.log('shakenWordsArray', shakenWordsArray)
  const t = useTranslations('Quiz')

  useEffect(() => {
    if (step !== shakenWordsArray.length && type === QUIZ_OPTIONS[2]) {
      playAudio({
        word: shakenWordsArray[step].word,
        lang: shakenWordsArray[step].language,
      })
    }
  }, [step])

  return (
    <>
      {step !== shakenWordsArray.length ? (
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
      ) : (
        <Statistic
          result={result}
          shakenWords={shakenWordsArray}
          setShakenWords={setShakenWordsArray}
          dictionaryId={dictionaryId}
          setStep={setStep}
          setResult={setResult}
        />
      )}
    </>
  )
}
