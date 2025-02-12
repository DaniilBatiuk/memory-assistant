import { getTranslations } from 'next-intl/server'

import { ICONS } from '@/constants'

export const FeatureSection: React.FC = async () => {
  const t = await getTranslations('HomePage')
  return (
    <section>
      <h2 className='text-balance text-center font-bold leading-[1.2] adaptive-font-size-30-40 adaptive-margin-bottom-25-30'>
        {t('features.title')}
      </h2>
      <div className='flex gap-5 max-[1003px]:flex-col max-[1003px]:items-center'>
        <div className='flex w-1/3 flex-col max-[1003px]:w-full'>
          {ICONS.addWords({ className: 'mx-auto' })}
          <h3 className='text-balance text-center font-semibold leading-[1.3] adaptive-font-size-20-24 adaptive-margin-bottom-10-24 adaptive-margin-top-5-24'>
            {t('features.addWords.title')}
          </h3>
          <p className='mt-auto text-balance text-center text-foreground/55'>
            {t('features.addWords.subtitle')}
          </p>
        </div>
        <div className='flex w-1/3 flex-col max-[1003px]:w-full'>
          {ICONS.takeTests({ className: 'mx-auto' })}
          <h3 className='text-balance text-center font-semibold leading-[1.3] adaptive-font-size-20-24 adaptive-margin-bottom-10-24 adaptive-margin-top-5-24'>
            {t('features.takeTests.title')}
          </h3>
          <p className='mt-auto text-balance text-center text-foreground/55'>
            {t('features.takeTests.subtitle')}
          </p>
        </div>
        <div className='flex w-1/3 flex-col max-[1003px]:w-full'>
          {ICONS.sentenceExamples({ className: 'mx-auto' })}
          <h3 className='text-balance text-center font-semibold leading-[1.3] adaptive-font-size-20-24 adaptive-margin-bottom-10-24 adaptive-margin-top-5-24'>
            {t('features.sentenceExamples.title')}
          </h3>
          <p className='mt-auto text-balance text-center text-foreground/55'>
            {t('features.sentenceExamples.subtitle')}
          </p>
        </div>
      </div>
    </section>
  )
}
