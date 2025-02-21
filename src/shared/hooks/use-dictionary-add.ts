import { useMutation, useQueryClient } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

import { createDictionary } from '@/actions'

import { CreateDictionary } from '@/validators'

import { getDictionariesQueryOptions } from '../lib'

export const useDictionaryAdd = (userId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createDictionary,

    onMutate: async (newDictionary: CreateDictionary) => {
      await queryClient.cancelQueries({ queryKey: getDictionariesQueryOptions(userId).queryKey })

      const tempId = uuidv4()
      const previousDictionaries =
        queryClient.getQueryData<IDictionary[]>(getDictionariesQueryOptions(userId).queryKey) || []

      queryClient.setQueryData<IDictionary[]>(getDictionariesQueryOptions(userId).queryKey, [
        ...previousDictionaries,
        { ...newDictionary, id: tempId, userId },
      ])

      return { previousDictionaries, tempId }
    },

    onSuccess: (savedDictionary, _, context) => {
      if (context?.tempId) {
        queryClient.setQueryData<IDictionary[]>(
          getDictionariesQueryOptions(userId).queryKey,
          (oldDictionaries = []) =>
            oldDictionaries.map(dict => (dict.id === context.tempId ? savedDictionary : dict)),
        )
      }
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
