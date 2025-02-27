'use server'

import { UpdateWord } from '@/validators'

import { prisma } from '@/lib'

export const getWord = async (word: string, dictionaryId: string): Promise<IWordDto | null> => {
  return await prisma.word.findFirst({
    where: {
      word,
      dictionaryId,
    },
  })
}

export const addWordToDictionary = async (newWord: IWordCreate): Promise<IWordDto> => {
  const existingWord = await getWord(newWord.word, newWord.dictionaryId)

  if (existingWord) {
    await prisma.word.delete({
      where: {
        id: existingWord.id,
        dictionaryId: newWord.dictionaryId,
      },
    })
  }

  return await prisma.word.create({
    data: {
      ...newWord,
    },
  })
}

export const deleteWord = async (id: string) => {
  return await prisma.word.delete({
    where: {
      id,
    },
  })
}

export const updateWord = async (dictionary: UpdateWord): Promise<IWordDto> => {
  return await prisma.word.update({
    where: {
      id: dictionary.id,
    },
    data: {
      ...dictionary,
    },
  })
}

export const updateWordCreatedAt = async (wordId: string): Promise<IWordDto> => {
  return await prisma.word.update({
    where: {
      id: wordId,
    },
    data: {
      createdAt: new Date(),
    },
  })
}
