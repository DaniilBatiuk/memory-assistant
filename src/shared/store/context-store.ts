import { create } from 'zustand'

import { LanguageCode } from '@/constants'

interface ContextState {
  search: string
  from: keyof typeof LanguageCode
  to: keyof typeof LanguageCode

  setSearch: (search: string) => void
  setFrom: (from: keyof typeof LanguageCode) => void
  setTo: (to: keyof typeof LanguageCode) => void
}

export const useContextStore = create<ContextState>(set => ({
  search: '',
  from: 'English',
  to: 'Russian',

  setSearch: (search: string) => set({ search }),
  setFrom: (from: keyof typeof LanguageCode) => set({ from }),
  setTo: (to: keyof typeof LanguageCode) => set({ to }),
}))
