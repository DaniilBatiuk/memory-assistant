import Image from 'next/image'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

import { Button } from '../../ui/button'
import { LangToggle } from '../../ui/lang-toggle'
import { ThemeToggle } from '../../ui/theme-toggle'

import Logo from '@/../public/logo.png'

export const Header: React.FC = () => {
  return (
    <header className='h-[65px] border-b-[1px] py-4 backdrop-blur-2xl'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center adaptive-column-gap-20-40'>
          <Link href={LINKS.Home} className='flex items-center gap-[15px]'>
            <Image alt='logo' src={Logo} loading={'eager'} decoding='sync' quality={100} />
            <p className='text-xl font-bold'>Memory assistant</p>
          </Link>
          <div className='flex items-center justify-start adaptive-column-gap-15-20'>
            <Link
              href={LINKS.About}
              className='text-left text-base text-black/55 hover:text-black dark:text-white/60 dark:hover:text-white'
            >
              About us
            </Link>
            <p className='text-base text-black/55 hover:cursor-pointer hover:text-black dark:text-white/60 dark:hover:text-white'>
              Translation
            </p>
            <p className='text-base text-black/55 hover:cursor-pointer hover:text-black dark:text-white/60 dark:hover:text-white'>
              Context
            </p>
            <p className='text-base text-black/55 hover:cursor-pointer hover:text-black dark:text-white/60 dark:hover:text-white'>
              Demo dictionary
            </p>
          </div>
        </div>
        <div className='flex items-center gap-x-[20px]'>
          <div className='flex items-center gap-[10px]'>
            <Button variant='outline'>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <div className='flex items-center gap-x-[5px]'>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
