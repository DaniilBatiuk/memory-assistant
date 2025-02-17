import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { ICONS } from '@/constants'

import AboutImage from '@/../public/about-image.webp'

export default async function About() {
  const t = await getTranslations('AboutPage')
  return (
    <section className='container adaptive-margin-top-20-60'>
      <div>
        <h1 className='text-center font-bold adaptive-font-size-30-40 adaptive-margin-bottom-10-15'>
          {t('title')}
        </h1>
        <p className='text-center text-foreground/55 adaptive-font-size-16-18 adaptive-margin-bottom-25-40'>
          {t('subtitle')}
        </p>
      </div>
      <Image
        className='max-h-[250px] rounded-2xl object-cover max-[600px]:rounded-xl'
        placeholder='blur'
        src={AboutImage}
        alt='About image'
        priority
        quality={100}
        loading={'eager'}
      />
      <div className='flex flex-col adaptive-row-gap-40-60'>
        <div className='adaptive-margin-top-30-40'>
          <h2 className='font-semibold adaptive-font-size-20-30 adaptive-margin-bottom-10-15'>
            {t('why.title')}
          </h2>
          <p className='mb-5 text-foreground/55 adaptive-font-size-16-18'>{t('why.subtitle')}</p>
          <ul className='adaptive flex flex-col space-y-4 adaptive-margin-left-30-50 max-[600px]:ml-0'>
            <li>
              <h3 className='mb-1 font-semibold adaptive-font-size-18-20'>
                {t('why.reason1.title')}
              </h3>
              <p className='text-foreground/55 adaptive-font-size-16-18'>
                {t('why.reason1.subtitle')}
              </p>
            </li>
            <li>
              <h3 className='mb-1 font-semibold adaptive-font-size-18-20'>
                {t('why.reason2.title')}
              </h3>
              <p className='text-foreground/55 adaptive-font-size-16-18'>
                {t('why.reason2.subtitle')}
              </p>
            </li>
            <li>
              <h3 className='mb-1 font-semibold adaptive-font-size-18-20'>
                {t('why.reason3.title')}
              </h3>
              <p className='text-foreground/55 adaptive-font-size-16-18'>
                {t('why.reason3.subtitle')}
              </p>
            </li>
            <li>
              <h3 className='mb-1 font-semibold adaptive-font-size-18-20'>
                {t('why.reason4.title')}
              </h3>
              <p className='text-foreground/55 adaptive-font-size-16-18'>
                {t('why.reason4.subtitle')}
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-semibold adaptive-font-size-20-30 adaptive-margin-bottom-10-15'>
            {t('who.title')}
          </h2>
          <p className='mb-5 text-foreground/55 adaptive-font-size-16-18'>{t('who.subtitle')}</p>
          <ul className='space-y-4 adaptive-font-size-16-18'>
            <li className='flex gap-3'>
              {ICONS.checkMark({ className: 'flex-shrink-0' })}
              <p>
                {t('who.forWho.studentsAndLearners.who')}
                <span className='text-foreground/55'>
                  {t('who.forWho.studentsAndLearners.how')}
                </span>
              </p>
            </li>
            <li className='flex gap-3'>
              {ICONS.checkMark({ className: 'flex-shrink-0' })}
              <p>
                {t('who.forWho.travelers.who')}
                <span className='text-foreground/55'> {t('who.forWho.travelers.how')}</span>
              </p>
            </li>
            <li className='flex gap-3'>
              {ICONS.checkMark({ className: 'flex-shrink-0' })}
              <p>
                {t('who.forWho.professionalsWorking.who')}
                <span className='text-foreground/55'>
                  {t('who.forWho.professionalsWorking.how')}
                </span>
              </p>
            </li>
            <li className='flex gap-3'>
              {ICONS.checkMark({ className: 'flex-shrink-0' })}
              <p>
                {t('who.forWho.anyoneWhoWants.who')}
                <span className='text-foreground/55'> {t('who.forWho.anyoneWhoWants.how')}</span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-semibold adaptive-font-size-20-30 adaptive-margin-bottom-10-15'>
            {t('conclusion.title')}
          </h2>
          <p className='text-foreground/55 adaptive-font-size-16-18'>{t('conclusion.subtitle')}</p>
        </div>
      </div>
    </section>
  )
}
