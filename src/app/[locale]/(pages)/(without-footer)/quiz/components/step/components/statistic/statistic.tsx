import { ArrowUpFromLine, CircleX, StepForward } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

import { useStatistic } from './hooks/use-statistic'

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
  const { t, resultStats, clickContinue, clickMoveWordsUp, updateWordCreatedAtIsPending } =
    useStatistic({
      setShakenWords,
      setStep,
      setResult,
      dictionaryId,
      shakenWords,
      result,
    })

  return (
    <div>
      <h1 className='text-center font-bold adaptive-font-size-30-40 adaptive-margin-bottom-10-15'>
        {resultStats}/{shakenWords.length}
      </h1>
      <p className='text-center text-foreground/55 adaptive-font-size-16-18 adaptive-margin-bottom-20-30'>
        {resultStats < shakenWords.length ? t('descriptionContinue') : t('descriptionGoBack')}
      </p>
      <div className='flex flex-wrap items-center justify-center gap-3'>
        {resultStats < shakenWords.length && (
          <>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={clickContinue}
                    size={'iconLg'}
                    aria-label='continue'
                    className='[&_svg]:size-[1.5rem]'
                  >
                    <StepForward />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('tooltips.continue')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size={'iconLg'}
                    aria-label='move words'
                    onClick={clickMoveWordsUp}
                    disabled={updateWordCreatedAtIsPending}
                    className='[&_svg]:size-[1.5rem]'
                  >
                    <ArrowUpFromLine />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('tooltips.moveWords')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={LINKS.Dictionary + '/' + dictionaryId} className='h-full'>
                <Button size={'iconLg'} aria-label='back' className='[&_svg]:size-[1.5rem]'>
                  <CircleX />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('tooltips.back')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
