import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

import Logo from '@/../public/logo.png'

export const Navbar: React.FC = async () => {
  const t = await getTranslations('Header')

  return (
    <div className='flex items-center adaptive-column-gap-20-40'>
      <Link href={LINKS.Home} className='flex items-center gap-[15px]'>
        <Image alt='logo' src={Logo} loading={'eager'} decoding='sync' quality={100} />
        <p className='text-xl font-bold max-[420px]:hidden'>Memory assistant</p>
      </Link>
      <nav className='max-[940px]:hidden'>
        <ul className='flex items-center justify-start adaptive-column-gap-15-20'>
          <li>
            <Link
              href={LINKS.About}
              className='text-base text-black/55 hover:text-black dark:text-white/60 dark:hover:text-white'
            >
              {t('about')}
            </Link>
          </li>
          <li>
            <p className='text-base text-black/55 hover:cursor-pointer hover:text-black dark:text-white/60 dark:hover:text-white'>
              {t('translation')}
            </p>
          </li>
          <li>
            <p className='text-base text-black/55 hover:cursor-pointer hover:text-black dark:text-white/60 dark:hover:text-white'>
              {t('context')}
            </p>
          </li>
          <li>
            <p className='text-base text-black/55 hover:cursor-pointer hover:text-black dark:text-white/60 dark:hover:text-white'>
              {t('demoDictionary')}
            </p>
          </li>
        </ul>
      </nav>
    </div>
  )
}
