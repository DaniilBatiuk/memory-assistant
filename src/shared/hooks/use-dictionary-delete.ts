import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteDictionary } from '@/actions'

import { getDictionariesQueryOptions } from '../lib'

export const useDictionaryDelete = (userId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteDictionary,

    onMutate: async deleteDictionaryId => {
      await queryClient.cancelQueries({ queryKey: getDictionariesQueryOptions(userId).queryKey })

      const previousDictionariesList =
        queryClient.getQueryData<IDictionary[]>(getDictionariesQueryOptions(userId).queryKey) || []

      queryClient.setQueryData<IDictionary[]>(
        getDictionariesQueryOptions(userId).queryKey,
        previousDictionariesList.filter(item => item.id !== deleteDictionaryId),
      )

      return { previousDictionariesList }
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getDictionariesQueryOptions(userId).queryKey,
          context.previousDictionariesList,
        )
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getDictionariesQueryOptions(userId).queryKey })
    },
  })
}
