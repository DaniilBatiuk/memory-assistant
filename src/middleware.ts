import { decode } from 'next-auth/jwt'
import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { routing } from '@/i18n'

const intlMiddleware = createMiddleware(routing)

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.includes('/dictionaries') ||
    pathname.includes('/dictionary') ||
    pathname.includes('/quiz')
  ) {
    const sessionToken =
      request.cookies.get('__Secure-next-auth.session-token')?.value ||
      request.cookies.get('next-auth.session-token')?.value

    let user = null

    if (sessionToken) {
      user = await decode({ token: sessionToken, secret: process.env.NEXTAUTH_SECRET! })
    }
    if (!user) {
      const locale = request.cookies.get('NEXT_LOCALE')?.value ?? 'en'
      return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
}
