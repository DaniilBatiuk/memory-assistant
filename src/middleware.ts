import createMiddleware from 'next-intl/middleware'

import { routing } from '@/i18n'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
}
