'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { RadioGroupBlock } from '../radio-group/radio-group'

import { Statistic } from './components/statistic/statistic'

interface StepProps {
  shakenWords: IShakenWord[]
  dictionaryId: string
}

export const Step: React.FC<StepProps> = ({ shakenWords, dictionaryId }: StepProps) => {
  const [shakenWordsArray, setShakenWordsArray] = useState<IShakenWord[]>(shakenWords)
  const [step, setStep] = useState(0)
  const [result, setResult] = useState<boolean[]>([])

  const t = useTranslations('Quiz')

  console.log('result', result)
  return (
    <>
      {step !== shakenWordsArray.length ? (
        <>
          <div>
            <h1 className='text-center font-bold adaptive-font-size-30-40'>
              {shakenWordsArray[step].word}
            </h1>
            <p className='text-center text-foreground/55 adaptive-font-size-16-18'>
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
