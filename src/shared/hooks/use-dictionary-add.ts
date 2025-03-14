import { useMutation } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

import { createDictionary } from '@/actions'

import { CreateDictionary } from '@/validators'

import { getDictionariesQueryOptions, getQueryClient } from '../lib'

export const useDictionaryAdd = (userId: string) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: createDictionary,

    onMutate: async (newDictionary: CreateDictionary) => {
      await queryClient.cancelQueries({ queryKey: getDictionariesQueryOptions(userId).queryKey })

      const tempId = uuidv4()
      const previousDictionaries =
        queryClient.getQueryData<IDictionary[]>(getDictionariesQueryOptions(userId).queryKey) || []

      queryClient.setQueryData<IDictionary[]>(getDictionariesQueryOptions(userId).queryKey, [
        { ...newDictionary, id: tempId, userId, words: [] },
        ...previousDictionaries,
      ])

      return { previousDictionaries, tempId }
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getDictionariesQueryOptions(userId).queryKey,
          context.previousDictionaries,
        )
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getDictionariesQueryOptions(userId).queryKey })
    },
  })
}
