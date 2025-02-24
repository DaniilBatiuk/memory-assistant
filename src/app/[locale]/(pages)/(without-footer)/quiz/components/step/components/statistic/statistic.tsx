import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/ui'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

interface StatisticProps {
  result: boolean[]
  shakenWords: IShakenWord[]
  setShakenWords: React.Dispatch<React.SetStateAction<IShakenWord[]>>
  dictionaryId: string
  setStep: Dispatch<SetStateAction<number>>
  setResult: Dispatch<SetStateAction<boolean[]>>
}

export const Statistic: React.FC<StatisticProps> = ({
  result,
  shakenWords,
  dictionaryId,
  setShakenWords,
  setStep,
  setResult,
}: StatisticProps) => {
  const t = useTranslations('Quiz')

  const resultStats = result.reduce((acc, cur) => acc + (cur ? 1 : 0), 0)

  const clickContinue = () => {
    setStep(0)
    setResult([])
    setShakenWords(shakenWords.filter((_, index) => !result[index]))
  }
  return (
    <div>
      <h1 className='text-center font-bold adaptive-font-size-30-40 adaptive-margin-bottom-10-15'>
        {resultStats}/{shakenWords.length}
      </h1>
      <p className='text-center text-foreground/55 adaptive-font-size-16-18 adaptive-margin-bottom-20-30'>
        {resultStats < shakenWords.length ? t('descriptionContinue') : t('descriptionGoBack')}
      </p>
      <div className='flex items-center justify-center gap-9'>
        {resultStats < shakenWords.length && (
          <Button size={'md'} onClick={clickContinue}>
            {t('continue')}
          </Button>
        )}
        <Link href={LINKS.Dictionary + '/' + dictionaryId} className='h-full'>
          <Button size={'md'}>{t('back')}</Button>
        </Link>
      </div>
    </div>
  )
}
