import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, // Time during which the data is considered fresh (1 minute)
      gcTime: 24 * 60 * 60 * 1000, // Time after which unused data will be garbage collected (24 hours)
      refetchOnWindowFocus: false,
    },
  },
})
