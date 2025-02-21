import { useTranslations } from 'next-intl'

import { LINKS } from '@/constants'

import { cn } from '@/lib'

import { Link } from '@/i18n'

import { DialogTranslate } from '../../../dialog-translate/dialog-translate'

import { AuthButton } from './components/auth-button/auth-button'
import { DictionariesLi } from './components/dictionaries-li/dictionaries-li'

interface BurgerProps {
  burgerActive: boolean
  closeBurgerMenu: () => void
}

export const MenuOpen: React.FC<BurgerProps> = ({ burgerActive, closeBurgerMenu }: BurgerProps) => {
  const t = useTranslations('Header')
  return (
    <nav
      className={cn(
        'full-height fixed left-[-100%] top-0 z-[1000] mt-[65px] w-full flex-col justify-between bg-background pt-[15px] transition-all',
        {
          'left-0 flex opacity-100': burgerActive,
          'pointer-events-none opacity-0': !burgerActive,
        },
      )}
    >
      <ul>
        <li className='flex w-full'>
          <Link
            href={LINKS.Home}
            onClick={closeBurgerMenu}
            className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:bg-foreground/5 hover:text-foreground'
          >
            {t('home')}
          </Link>
        </li>
        <li className='flex w-full'>
          <Link
            href={LINKS.About}
            onClick={closeBurgerMenu}
            className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:bg-foreground/5 hover:text-foreground'
          >
            {t('about')}
          </Link>
        </li>
        <li className='flex w-full'>
          <DialogTranslate>
            <button
              onClick={closeBurgerMenu}
              className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:cursor-pointer hover:bg-foreground/5 hover:text-foreground'
            >
              {t('translation')}
            </button>
          </DialogTranslate>
        </li>
        <li className='flex w-full'>
          <Link
            href={LINKS.Context}
            onClick={closeBurgerMenu}
            className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:cursor-pointer hover:bg-foreground/5 hover:text-foreground'
          >
            {t('context')}
          </Link>
        </li>
        <DictionariesLi closeBurgerMenu={closeBurgerMenu} />
      </ul>
      <AuthButton />
    </nav>
  )
}
