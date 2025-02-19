'use server'

// export const getDictionary = errorCatch(async (): Promise<IDictionaryDto[]> => {
//   const user = await getUser()

//   if (!user.success || !user.data) return []

//   const dictionaries = await prisma.dictionary.findMany({
//     where: {
//       userId: user.data.id,
//     },
//   })

//   return dictionaries
// })
