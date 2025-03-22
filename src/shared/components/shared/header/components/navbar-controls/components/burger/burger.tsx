'use client'

import { useState } from 'react'

import { Button } from '@/components/ui'

import { cn } from '@/lib'

import { MenuOpen } from '../menu-open/menu-open'

export const Burger: React.FC = () => {
  const [burgerActive, setBurgerActive] = useState(false)

  const clickBurger = () => {
    setBurgerActive(prev => !prev)
    document.body.classList.toggle('overflow-hidden')
  }

  return (
    <>
      <Button
        variant='ghost'
        size='icon'
        className='min-[941px]:hidden [&_svg]:size-[1.1rem]'
        onClick={clickBurger}
      >
        <div
          className={cn('group relative h-[14px] w-[20px]', {
            active: burgerActive,
          })}
        >
          <span className='absolute left-0 top-0 h-[2px] w-full bg-foreground transition-transform group-[.active]:translate-y-[6px] group-[.active]:rotate-45'></span>
          <span className='absolute left-0 top-[6px] h-[2px] w-full bg-foreground transition-opacity group-[.active]:opacity-0'></span>
          <span className='absolute bottom-0 left-0 h-[2px] w-full bg-foreground transition-transform group-[.active]:-translate-y-[6px] group-[.active]:-rotate-45'></span>
        </div>
      </Button>
      <MenuOpen burgerActive={burgerActive} closeBurgerMenu={clickBurger} />
    </>
  )
}
