import { create } from 'zustand'

import { LANGUAGE_CODE } from '@/constants'

interface ContextState {
  search: string
  from: keyof typeof LANGUAGE_CODE
  to: keyof typeof LANGUAGE_CODE
  translations: string

  setSearch: (search: string) => void
  setFrom: (from: keyof typeof LANGUAGE_CODE) => void
  setTo: (to: keyof typeof LANGUAGE_CODE) => void
  setTranslations: (translations: string) => void
}

export const useContextStore = create<ContextState>(set => ({
  search: '',
  from: 'English',
  to: 'Russian',
  translations: '',

  setSearch: (search: string) => set({ search }),
  setFrom: (from: keyof typeof LANGUAGE_CODE) => set({ from }),
  setTo: (to: keyof typeof LANGUAGE_CODE) => set({ to }),
  setTranslations: (translations: string) => set({ translations }),
}))
