'use client'

import { useLocale } from 'next-intl'
import Form from 'next/form'

import { LINKS } from '@/constants'

import { LanguageSwitcher } from './components/language-switcher/language-switcher'
import { SearchControls } from './components/language-switcher/search-controls/search-controls'

export const Search: React.FC = () => {
  const locale = useLocale()

  return (
    <Form action={`/${locale}/${LINKS.Context}`}>
      <LanguageSwitcher />
      <SearchControls />
    </Form>
  )
}
