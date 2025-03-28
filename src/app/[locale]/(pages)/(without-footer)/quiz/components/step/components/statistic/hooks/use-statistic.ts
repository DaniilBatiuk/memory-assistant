import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

import { useToast, useWordUpdateCreatedAt } from '@/hooks'

interface IUseStatistic {
  result: boolean[]
  setShakenWords: React.Dispatch<React.SetStateAction<IShakenWord[]>>
  setStep: Dispatch<SetStateAction<number>>
  setResult: Dispatch<SetStateAction<boolean[]>>
  shakenWords: IShakenWord[]
  dictionaryId: string
}

export const useStatistic = ({
  setShakenWords,
  setStep,
  setResult,
  dictionaryId,
  shakenWords,
  result,
}: IUseStatistic) => {
  const t = useTranslations('Quiz')

  const { toast } = useToast()
  const { mutate: updateWordCreatedAt, isPending: updateWordCreatedAtIsPending } =
    useWordUpdateCreatedAt(dictionaryId)

  const clickContinue = () => {
    setStep(0)
    setResult([])
    setShakenWords(shakenWords.filter((_, index) => !result[index]))
  }

  const clickMoveWordsUp = async () => {
    const promises = shakenWords
      .map((word, index) => !result[index] && updateWordCreatedAt(word.id))
      .filter(Boolean)

    await Promise.all(promises)

    toast({
      title: t('toastTitle'),
      description: t('toastDescription'),
    })
  }

  const resultStats = result.reduce((acc, cur) => acc + (cur ? 1 : 0), 0)

  return { t, clickContinue, clickMoveWordsUp, updateWordCreatedAtIsPending, resultStats }
}
