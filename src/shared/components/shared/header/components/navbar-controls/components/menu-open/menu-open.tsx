import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

import { cn } from '@/shared/lib/css'

interface BurgerProps {
  burgerActive: boolean
}

export const MenuOpen: React.FC<BurgerProps> = ({ burgerActive }: BurgerProps) => {
  const t = useTranslations('Header')
  return (
    <nav
      className={cn(
        'full-height fixed left-[-100%] top-0 mt-[65px] w-full flex-col justify-between bg-background pt-[15px] transition-all',
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
            className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:bg-foreground/5 hover:text-foreground'
          >
            {t('about')}
          </Link>
        </li>
        <li className='flex w-full'>
          <p className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:cursor-pointer hover:bg-foreground/5 hover:text-foreground'>
            {t('translation')}
          </p>
        </li>
        <li className='flex w-full'>
          <p className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:cursor-pointer hover:bg-foreground/5 hover:text-foreground'>
            {t('context')}
          </p>
        </li>
        <li className='flex w-full'>
          <p className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:cursor-pointer hover:bg-foreground/5 hover:text-foreground'>
            {t('demoDictionary')}
          </p>
        </li>
      </ul>
      <Button size='md' className='full-width absolute bottom-[15px] mx-[15px] min-[551px]:hidden'>
        {t('signIn')}
      </Button>
    </nav>
  )
}
