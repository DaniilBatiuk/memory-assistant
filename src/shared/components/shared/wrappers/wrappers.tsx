import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'

import { QueryWrapper } from './query-wrapper'

export const Wrappers = async ({ children }: { children: React.ReactNode }) => {
  const messages = await getMessages()
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <NextIntlClientProvider messages={messages}>
        <QueryWrapper>
          <div className='flex min-h-svh flex-col'> {children}</div>
        </QueryWrapper>
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
