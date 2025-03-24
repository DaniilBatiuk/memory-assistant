'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

import { Toaster } from '@/components/ui'

import { getQueryClient } from '@/lib'

import { usePathname } from '@/i18n'

export const QueryWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || pathname !== '/') return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animation')
        }
      })
    })

    const elementsLeft = document.querySelectorAll('.hidden-animation-left')
    const elementsRight = document.querySelectorAll('.hidden-animation-right')
    elementsLeft.forEach(element => observer.observe(element))
    elementsRight.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  )
}
