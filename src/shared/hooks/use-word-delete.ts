import { useMutation } from '@tanstack/react-query'

import { deleteWord } from '@/actions'

import { getDictionaryQueryOptions, getQueryClient } from '../lib'

export const useWordDelete = (dictionaryId: string) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: deleteWord,

    onMutate: async deleteWordId => {
      await queryClient.cancelQueries({
        queryKey: getDictionaryQueryOptions(dictionaryId).queryKey,
      })

      const previousDictionary = queryClient.getQueryData<IDictionary>(
        getDictionaryQueryOptions(dictionaryId).queryKey,
      )
      if (previousDictionary) {
        queryClient.setQueryData<IDictionary>(getDictionaryQueryOptions(dictionaryId).queryKey, {
          ...previousDictionary,
          words: previousDictionary.words.filter(item => item.id !== deleteWordId),
        })
      }

      return { previousDictionary }
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getDictionaryQueryOptions(dictionaryId).queryKey,
          context.previousDictionary,
        )
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getDictionaryQueryOptions(dictionaryId).queryKey })
    },
  })
}
