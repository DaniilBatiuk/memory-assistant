'use client'

import { useEffect, useState } from 'react'

import { QUIZ_OPTIONS } from '@/constants'

import { playAudio } from '@/helpers'

import { Statistic } from './components/statistic/statistic'
import { Step } from './components/step/step'

interface StepProps {
  shakenWords: IShakenWord[]
  dictionaryId: string
  type: string
}

export const Steps: React.FC<StepProps> = ({ shakenWords, dictionaryId, type }: StepProps) => {
  const [shakenWordsArray, setShakenWordsArray] = useState<IShakenWord[]>(shakenWords)
  const [step, setStep] = useState(0)
  const [result, setResult] = useState<boolean[]>([])

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
        <Step
          shakenWordsArray={shakenWordsArray}
          step={step}
          setStep={setStep}
          setResult={setResult}
          type={type}
        />
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
