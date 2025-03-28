import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { ICONS } from '@/constants'

import HomeImage2 from '@/../public/home-img-2.webp'

export const FeatureDictionary: React.FC = async () => {
  const t = await getTranslations('HomePage')
  return (
    <section className='flex items-center justify-between adaptive-gap-25-40 max-[930px]:flex-col-reverse'>
      <Image
        className='half-width hidden-animation-left rounded-2xl max-[930px]:w-full lg:rounded-3xl'
        placeholder='blur'
        src={HomeImage2}
        alt=''
        priority
        quality={100}
        loading={'eager'}
      />
      <div className='half-width max-[930px]:w-full'>
        <h2 className='hidden-animation-right font-bold leading-[1.2] adaptive-font-size-30-40'>
          {t('featureDictionary.title')}
        </h2>
        <p className='hidden-animation-right text-lg text-foreground/55 delay-100 adaptive-font-size-16-18 adaptive-margin-bottom-20-25 adaptive-margin-top-10-15'>
          {t('featureDictionary.subtitle')}
        </p>
        <ul className='flex flex-col adaptive-row-gap-10-15'>
          <li className='hidden-animation-right flex items-center delay-200 adaptive-column-gap-10-15'>
            {ICONS.checkMark({ className: 'shrink-0' })}
            {t('featureDictionary.list.advantage1')}
          </li>
          <li className='hidden-animation-right delay-400 flex items-center adaptive-column-gap-10-15'>
            {ICONS.checkMark({ className: 'shrink-0' })}
            {t('featureDictionary.list.advantage2')}
          </li>
          <li className='hidden-animation-right delay-600 flex items-center adaptive-column-gap-10-15'>
            {ICONS.checkMark({ className: 'shrink-0' })}
            {t('featureDictionary.list.advantage3')}
          </li>
        </ul>
      </div>
    </section>
  )
}
