import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/request.ts')

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

export default withNextIntl(nextConfig)
