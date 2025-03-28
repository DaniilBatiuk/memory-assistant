'use client'

import { ICONS } from '@/constants'

import { Button } from '../../../../ui/button/button'

import { useSelectLang } from './hooks/use-select-lang'

export function LangToggle() {
  const { onSelectLang, locale } = useSelectLang()

  return (
    <Button
      variant='ghost'
      size='icon'
      className='[&_svg]:size-[1.1rem]'
      onClick={onSelectLang}
      aria-label='lang'
    >
      {ICONS.langEn({ className: locale === 'en' ? 'text-foreground' : 'hidden' })}
      {ICONS.langUa({ className: locale === 'ua' ? 'dark:block text-foreground' : 'hidden' })}
    </Button>
  )
}
