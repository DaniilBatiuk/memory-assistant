import { Metadata } from 'next'

import { COMMON_METADATA, WEB_NAME } from '../constants'

export const metadataFactory = (pageTitle?: string): Metadata => ({
  generator: 'Next.js',
  applicationName: WEB_NAME,
  keywords: [WEB_NAME, 'Assistant memory', "Помічник пам'яті"],
  authors: COMMON_METADATA.authors,
  creator: COMMON_METADATA.creator,
  publisher: COMMON_METADATA.publisher,
  title: pageTitle ? `${pageTitle} | ${WEB_NAME}` : COMMON_METADATA.title,
  description: COMMON_METADATA.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: pageTitle ? `${pageTitle} | ${WEB_NAME}` : COMMON_METADATA.title,
    description: COMMON_METADATA.description,
    url: COMMON_METADATA.url,
    images: [
      {
        url: COMMON_METADATA.image.url,
        width: COMMON_METADATA.image.width,
        height: COMMON_METADATA.image.height,
        alt: COMMON_METADATA.image.alt,
      },
    ],
    type: 'website',
  },
})
