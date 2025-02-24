import { MetadataRoute } from 'next'

import { LINKS, LOCALES } from '@/constants'

import { prisma } from '@/lib'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dictionaries = await prisma.dictionary.findMany()

  const localizedUrls = (
    path: string,
    changeFrequency: 'daily' | 'always' | 'hourly' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number,
  ) =>
    LOCALES.map(locale => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))

  const dictionariesEntries: MetadataRoute.Sitemap = dictionaries.flatMap(({ id }) =>
    localizedUrls(`${LINKS.Dictionary}/${id}`, 'daily', 0.9),
  )

  return [
    ...localizedUrls(LINKS.Context, 'monthly', 0.9),
    ...localizedUrls(LINKS.Dictionaries, 'daily', 0.9),
    ...localizedUrls(LINKS.Home, 'monthly', 0.8),
    ...localizedUrls(LINKS.Quiz, 'monthly', 0.9),
    ...localizedUrls(LINKS.About, 'yearly', 0.6),
    ...dictionariesEntries,
  ]
}
