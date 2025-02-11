import { getTranslations } from 'next-intl/server'

import { Button, LangToggle, ThemeToggle } from '@/components/ui'

import { Burger } from './components/burger/burger'

export const NavbarControls: React.FC = async () => {
  const t = await getTranslations('Header')
  return (
    <div className='flex items-center gap-x-[20px]'>
      <Button className='max-[550px]:hidden'>{t('signIn')}</Button>
      <div className='flex items-center gap-x-[5px]'>
        <LangToggle />
        <ThemeToggle />
        <Burger />
      </div>
    </div>
  )
}
