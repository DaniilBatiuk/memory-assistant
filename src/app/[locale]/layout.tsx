import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

import { Header, MainWrapper, QueryWrapper } from '@/components/shared'

import { Locale, routing } from '@/i18n'

import './globals.scss'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${interSans.variable} relative antialiased`}>
        <MainWrapper>
          <QueryWrapper>
            <Header />
            {children}
          </QueryWrapper>
        </MainWrapper>
      </body>
    </html>
  )
}
