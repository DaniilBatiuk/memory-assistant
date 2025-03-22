'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'

import { Toaster } from '@/components/ui'

import { getQueryClient } from '@/lib'

export const QueryWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
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
