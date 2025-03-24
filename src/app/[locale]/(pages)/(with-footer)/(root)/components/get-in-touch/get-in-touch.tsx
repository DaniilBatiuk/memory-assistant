import { getTranslations } from 'next-intl/server'

import { ICONS } from '@/constants'

import { Link } from '@/i18n'

export const GetInTouch: React.FC = async () => {
  const t = await getTranslations('HomePage')
  return (
    <section>
      <div className='hidden-animation-left flex flex-col items-center adaptive-margin-bottom-25-30 adaptive-row-gap-10-15'>
        <h2 className='font-bold adaptive-font-size-30-40'>{t('getInTouch.title')}</h2>
        <p className='text-foreground/55 adaptive-font-size-16-18'>{t('getInTouch.subtitle')}</p>
      </div>
      <div className='flex adaptive-gap-20-30 max-[930px]:flex-col max-[930px]:items-center'>
        <div className='hidden-animation-left flex w-1/3 flex-col delay-200 max-[930px]:w-full max-[930px]:items-center'>
          {ICONS.email()}
          <h3 className='font-semibold adaptive-font-size-20-30 adaptive-margin-bottom-10-15 adaptive-margin-top-5-24'>
            {t('getInTouch.email.title')}
          </h3>
          <p className='text-foreground/55 adaptive-margin-bottom-10-24 max-[930px]:text-center'>
            {t('getInTouch.email.subtitle')}
          </p>
          <p className='mt-auto'>{t('getInTouch.email.link')}</p>
        </div>
        <div className='hidden-animation-left delay-400 flex w-1/3 flex-col max-[930px]:w-full max-[930px]:items-center'>
          {ICONS.liveChat()}
          <h3 className='font-semibold adaptive-font-size-20-30 adaptive-margin-bottom-10-15 adaptive-margin-top-5-24'>
            {t('getInTouch.liveChat.title')}
          </h3>
          <p className='text-foreground/55 adaptive-margin-bottom-10-24 max-[930px]:text-center'>
            {t('getInTouch.liveChat.subtitle')}
          </p>
          <Link target='_blank' href='https://t.me/DaniilBatiuk' className='mt-auto'>
            {t('getInTouch.liveChat.link')}
          </Link>
        </div>
        <div className='hidden-animation-left delay-600 flex w-1/3 flex-col max-[930px]:w-full max-[930px]:items-center'>
          {ICONS.phone()}
          <h3 className='font-semibold adaptive-font-size-20-30 adaptive-margin-bottom-10-15 adaptive-margin-top-5-24'>
            {t('getInTouch.phone.title')}
          </h3>
          <p className='text-foreground/55 adaptive-margin-bottom-10-24 max-[930px]:text-center'>
            {t('getInTouch.phone.subtitle')}
          </p>
          <p className='mt-auto'>{t('getInTouch.phone.link')}</p>
        </div>
      </div>
    </section>
  )
}
