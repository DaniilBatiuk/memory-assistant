import { getTranslations } from 'next-intl/server'

import { Burger } from './components/burger/burger'
import { Button } from '@/shared/components/ui/button'
import { LangToggle } from '@/shared/components/ui/lang-toggle'
import { ThemeToggle } from '@/shared/components/ui/theme-toggle'

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
