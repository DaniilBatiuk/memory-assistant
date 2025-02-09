import { useLayoutEffect, useState } from 'react'

export function useLang() {
  const [lang, setLang] = useState('en')

  useLayoutEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en'
    setLang(storedLang)
  }, [])

  useLayoutEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  return { lang, setLang }
}
