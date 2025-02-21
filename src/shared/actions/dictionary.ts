'use server'

import { revalidateTag } from 'next/cache'

import { CreateDictionary, UpdateDictionary } from '@/validators'

import { prisma } from '../lib/db'

import { getUserOrRedirect } from './user'

export const createDictionary = async (dictionary: CreateDictionary): Promise<IDictionary> => {
  const user = await getUserOrRedirect()

  const newDictionary = await prisma.dictionary.create({
    data: {
      ...dictionary,
      userId: user.id,
    },
  })

  revalidateTag(`dictionaries-${user.id}`)

  return newDictionary
}

export const updateDictionary = async (dictionary: UpdateDictionary): Promise<IDictionary> => {
  const user = await getUserOrRedirect()

  const newDictionary = await prisma.dictionary.update({
    where: {
      id: dictionary.id,
    },
    data: {
      ...dictionary,
    },
  })

  revalidateTag(`dictionaries-${user.id}`)

  return newDictionary
}

export const deleteDictionary = async (id: string) => {
  const user = await getUserOrRedirect()

  await prisma.dictionary.delete({
    where: {
      id,
    },
  })

  revalidateTag(`dictionaries-${user.id}`)
}
