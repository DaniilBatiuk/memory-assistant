'use server'

import { CreateDictionary, UpdateDictionary } from '@/validators'

import { prisma } from '../lib/db'

import { getUserOrRedirect } from './user'

export const createDictionary = async (dictionary: CreateDictionary): Promise<IDictionary> => {
  const { user } = await getUserOrRedirect()

  return await prisma.dictionary.create({
    data: {
      ...dictionary,
      userId: user.id,
    },
    include: { words: { orderBy: { createdAt: 'desc' } } },
  })
}

export const updateDictionary = async (dictionary: UpdateDictionary): Promise<IDictionary> => {
  return await prisma.dictionary.update({
    where: {
      id: dictionary.id,
    },
    data: {
      ...dictionary,
    },
    include: { words: { orderBy: { createdAt: 'desc' } } },
  })
}

export const deleteDictionary = async (id: string) => {
  await prisma.word.deleteMany({
    where: {
      dictionaryId: id,
    },
  })

  await prisma.dictionary.delete({
    where: {
      id,
    },
  })
}

export const getAllDictionaries = async (id: string): Promise<IDictionary[]> => {
  return await prisma.dictionary.findMany({
    where: { userId: id },
    include: { words: true },
    orderBy: { createdAt: 'desc' },
  })
}

export const getDictionary = async (id: string): Promise<IDictionary | null> => {
  return await prisma.dictionary.findUnique({
    where: { id },
    include: { words: { orderBy: { createdAt: 'desc' } } },
  })
}
