import { unstable_cache } from 'next/cache'

import { prisma } from './db'

export const getAllDictionaries = (id: string): Promise<IDictionary[]> => {
  return unstable_cache(
    async () =>
      (await prisma.dictionary.findMany({
        where: { userId: id },
      })) as IDictionary[],
    [`dictionaries-${id}`],
    {
      tags: [`dictionaries-${id}`],
      revalidate: 60 * 60 * 2,
    },
  )()
}
