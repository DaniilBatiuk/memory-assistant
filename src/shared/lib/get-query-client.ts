import { QueryClient, defaultShouldDehydrateQuery, isServer } from '@tanstack/react-query'

export const QUERIES_TIMEOUT = {
  staleTime: 1 * 60 * 1000, // Time during which the data is considered fresh (1 minute)
  gcTime: 24 * 60 * 60 * 1000, // Time after which unused data will be garbage collected (24 hours)
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        ...QUERIES_TIMEOUT,
        refetchOnWindowFocus: false,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: query =>
          defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}
