'use server'

import { currentUser } from '@clerk/nextjs/server'

import { errorCatch } from '@/helpers'

import { prisma } from '../lib/db'

export const getUser = errorCatch(async (): Promise<IUserDto | null> => {
  const user = await currentUser()

  console.log('user', user)

  if (!user) return null

  console.log('a')

  const userExist = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  })
  console.log('loggedInUser', userExist)

  if (userExist) return userExist

  console.log('b')

  const newUser = await prisma.user.create({
    data: {
      clerkId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  })

  console.log('newUser', newUser)

  return newUser
})
