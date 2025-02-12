import { getTranslations } from 'next-intl/server'

import { Button, Input } from '@/components/ui'

import { ICONS, LINKS } from '@/constants'

import { Link } from '@/i18n'

export const Footer: React.FC = async () => {
  const t = await getTranslations('Footer')
  return (
    <footer className='border-t-[1px] bg-foreground/3 adaptive-margin-top-80-120 adaptive-padding-bottom-30-50 adaptive-padding-top-20-40'>
      <div className='container flex justify-between max-[960px]:flex-col max-[960px]:gap-10'>
        <div className='flex flex-col adaptive-gap-20-30'>
          <div className='flex items-center gap-[15px]'>
            {ICONS.logo({ className: 'text-foreground size-[40px]' })}
            <p className='text-xl font-bold'>Memory assistant</p>
          </div>
          <ul className='flex items-center justify-start adaptive-gap-20-24 max-[435px]:flex-col'>
            <li>
              <Link
                href={LINKS.About}
                className='text-base text-foreground/55 hover:text-foreground max-[435px]:text-lg'
              >
                {t('about')}
              </Link>
            </li>
            <li>
              <p className='text-base text-foreground/55 hover:cursor-pointer hover:text-foreground max-[435px]:text-lg'>
                {t('translation')}
              </p>
            </li>
            <li>
              <p className='text-base text-foreground/55 hover:cursor-pointer hover:text-foreground max-[435px]:text-lg'>
                {t('context')}
              </p>
            </li>
            <li>
              <p className='text-base text-foreground/55 hover:cursor-pointer hover:text-foreground max-[435px]:text-lg'>
                {t('demoDictionary')}
              </p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-between gap-2'>
          <p className='font-semibold'>{t('subscribe')}</p>
          <div className='flex gap-2 max-[435px]:flex-col'>
            <Input
              type='email'
              placeholder='Email'
              size={'md'}
              className='w-[344px] max-[960px]:w-full'
            />
            <Button variant={'outline'} size={'md'}>
              {t('subscribe')}
            </Button>
          </div>
        </div>
      </div>
      <div className='border-t-[1px] text-center text-sm adaptive-margin-top-50-80 adaptive-padding-top-20-30'>
        {t('privacyPolicy')}
      </div>
    </footer>
  )
}
