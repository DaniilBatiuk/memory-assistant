'use client'

import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'

import { ICONS } from '@/constants'

import { usePathname, useRouter } from '@/i18n'

import { Button } from './button'

export function LangToggle() {
  const locale = useLocale()
  const router = useRouter()

  const pathname = usePathname()
  const params = useParams()
  function onSelectLang() {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: locale === 'en' ? 'ua' : 'en' },
    )
  }
  return (
    <Button variant='ghost' size='icon' className='[&_svg]:size-[1.1rem]' onClick={onSelectLang}>
      {ICONS.langEn({ className: locale === 'en' ? 'dark:text-white' : 'hidden' })}
      {ICONS.langUa({ className: locale === 'ua' ? 'dark:block dark:text-white' : 'hidden' })}
    </Button>
  )
}
