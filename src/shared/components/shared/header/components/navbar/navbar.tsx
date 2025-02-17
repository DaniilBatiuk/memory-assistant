import { getTranslations } from 'next-intl/server'

import { ICONS, LINKS } from '@/constants'

import { Link } from '@/i18n'

import { DialogTranslate } from '../dialog-translate/dialog-translate'

export const Navbar: React.FC = async () => {
  const t = await getTranslations('Header')

  return (
    <div className='flex items-center adaptive-column-gap-20-40'>
      <Link href={LINKS.Home} className='flex items-center gap-[15px]'>
        {ICONS.logo({ className: 'text-foreground size-[40px]' })}
        <p className='text-xl font-bold max-[420px]:hidden'>Memory assistant</p>
      </Link>
      <nav className='max-[940px]:hidden'>
        <ul className='flex items-center justify-start adaptive-column-gap-15-20'>
          <li>
            <Link href={LINKS.About} className='text-base text-foreground/55 hover:text-foreground'>
              {t('about')}
            </Link>
          </li>
          <li>
            <DialogTranslate>
              <button className='text-base text-foreground/55 hover:cursor-pointer hover:text-foreground'>
                {t('translation')}
              </button>
            </DialogTranslate>
          </li>
          <li>
            <Link
              href={LINKS.Context}
              className='text-base text-foreground/55 hover:cursor-pointer hover:text-foreground'
            >
              {t('context')}
            </Link>
          </li>
          <li>
            <Link
              href={LINKS.Dictionaries + '/1'}
              className='text-base text-foreground/55 hover:cursor-pointer hover:text-foreground'
            >
              {t('demoDictionary')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
