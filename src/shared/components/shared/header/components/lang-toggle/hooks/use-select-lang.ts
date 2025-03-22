import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'

import { usePathname, useRouter } from '@/i18n'

export const useSelectLang = () => {
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

  return { onSelectLang, locale }
}
