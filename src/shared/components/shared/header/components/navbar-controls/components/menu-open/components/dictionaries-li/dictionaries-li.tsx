'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

interface DictionariesLiProps {
  closeBurgerMenu: () => void
}

export const DictionariesLi: React.FC<DictionariesLiProps> = ({
  closeBurgerMenu,
}: DictionariesLiProps) => {
  const t = useTranslations('Header')

  const { data: session } = useSession()

  if (!session) return <></>

  return (
    <li className='flex w-full'>
      <Link
        href={LINKS.Dictionaries}
        onClick={closeBurgerMenu}
        className='w-full py-3 text-center text-xl font-medium text-foreground/60 hover:cursor-pointer hover:bg-foreground/5 hover:text-foreground'
      >
        {t('dictionaries')}
      </Link>
    </li>
  )
}
