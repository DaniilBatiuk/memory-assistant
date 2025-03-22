import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { CreateAVocabulary } from './components/create-vocabulary'
import HomeImage1 from '@/../public/home-img-1.webp'

export const HeroSection: React.FC = async () => {
  const t = await getTranslations('HomePage')

  return (
    <section className='flex items-center justify-between adaptive-gap-25-40 max-[930px]:flex-col'>
      <div className='half-width max-[930px]:w-full'>
        <h1 className='font-bold leading-[1.2] adaptive-font-size-40-69'>{t('title')}</h1>
        <p className='text-lg text-foreground/55 adaptive-font-size-16-18 adaptive-margin-bottom-20-25 adaptive-margin-top-10-15'>
          {t('subtitle')}
        </p>
        <CreateAVocabulary />
      </div>
      <Image
        className='half-width rounded-2xl max-[930px]:w-full lg:rounded-3xl'
        placeholder='blur'
        src={HomeImage1}
        alt='Home image'
        priority
        quality={100}
        loading={'eager'}
      />
    </section>
  )
}
