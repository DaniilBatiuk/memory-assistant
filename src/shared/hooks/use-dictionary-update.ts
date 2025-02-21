import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateDictionary } from '@/actions'

import { UpdateDictionary } from '@/validators'

import { getDictionariesQueryOptions } from '../lib'

export const useDictionaryUpdate = (userId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateDictionary,

    onMutate: async (updateDictionary: UpdateDictionary) => {
      await queryClient.cancelQueries({ queryKey: getDictionariesQueryOptions(userId).queryKey })

      const previousDictionaries =
        queryClient.getQueryData<IDictionary[]>(getDictionariesQueryOptions(userId).queryKey) || []

      queryClient.setQueryData<IDictionary[]>(
        getDictionariesQueryOptions(userId).queryKey,
        previousDictionaries.map(item =>
          item.id === updateDictionary.id ? { ...item, ...updateDictionary } : item,
        ),
      )

      return { previousDictionaries, updateDictionary }
    },

    onSuccess: (updatedDictionary, _, context) => {
      if (context) {
        queryClient.setQueryData<IDictionary[]>(
          getDictionariesQueryOptions(userId).queryKey,
          (oldDictionaries = []) =>
            oldDictionaries.map(dict =>
              dict.id === updatedDictionary.id ? updatedDictionary : dict,
            ),
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
