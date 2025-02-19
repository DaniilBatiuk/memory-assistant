import { LangToggle, ThemeToggle } from '@/components/ui'

import { AccountManage } from './components/account-manage/account-manage'
import { Burger } from './components/burger/burger'

export const NavbarControls: React.FC = () => {
  console.log('NavbarControls')
  return (
    <div className='flex items-center gap-x-[20px]'>
      <AccountManage />
      <div className='flex items-center gap-x-[5px]'>
        <LangToggle />
        <ThemeToggle />
        <Burger />
      </div>
    </div>
  )
}
