import { useTranslations } from 'next-intl'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/css'

interface BurgerProps {
  burgerActive: boolean
}

export const MenuOpen: React.FC<BurgerProps> = ({ burgerActive }: BurgerProps) => {
  const t = useTranslations('Header')
  return (
    <nav
      className={cn(
        'full-height fixed left-[-100%] top-0 mt-[65px] w-full flex-col justify-between bg-white pt-[15px] transition-all dark:bg-black',
        {
          'left-0 flex opacity-100': burgerActive,
          'pointer-events-none opacity-0': !burgerActive,
        },
      )}
    >
      <ul>
        <li className='flex w-full'>
          <Link
            href={LINKS.About}
            className='w-full py-3 text-center text-xl font-medium text-black/55 hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white'
          >
            {t('about')}
          </Link>
        </li>
        <li className='flex w-full'>
          <p className='w-full py-3 text-center text-xl font-medium text-black/55 hover:cursor-pointer hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white'>
            {t('translation')}
          </p>
        </li>
        <li className='flex w-full'>
          <p className='w-full py-3 text-center text-xl font-medium text-black/55 hover:cursor-pointer hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white'>
            {t('context')}
          </p>
        </li>
        <li className='flex w-full'>
          <p className='w-full py-3 text-center text-xl font-medium text-black/55 hover:cursor-pointer hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white'>
            {t('demoDictionary')}
          </p>
        </li>
      </ul>
      <Button
        size='extraLg'
        className='full-width absolute bottom-[15px] mx-[15px] text-base min-[551px]:hidden'
      >
        {t('signIn')}
      </Button>
    </nav>
  )
}
