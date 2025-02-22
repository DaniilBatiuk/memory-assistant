import { useMutation } from '@tanstack/react-query'

import { updateWordCreatedAt } from '@/actions'

import { getDictionaryQueryOptions, getQueryClient } from '../lib'

export const useWordUpdateCreatedAt = (dictionaryId: string) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: updateWordCreatedAt,

    onMutate: async (updateWordCreatedAtId: string) => {
      await queryClient.cancelQueries({
        queryKey: getDictionaryQueryOptions(dictionaryId).queryKey,
      })

      const previousDictionary = queryClient.getQueryData<IDictionary>(
        getDictionaryQueryOptions(dictionaryId).queryKey,
      )

      if (previousDictionary) {
        const filteredWords = previousDictionary.words.filter(
          item => item.id !== updateWordCreatedAtId,
        )
        const findWord = previousDictionary.words.find(item => item.id === updateWordCreatedAtId)

        if (findWord) {
          queryClient.setQueryData<IDictionary>(getDictionaryQueryOptions(dictionaryId).queryKey, {
            ...previousDictionary,
            words: [findWord, ...filteredWords],
          })
        }
      }

      return { previousDictionary, updateWordCreatedAtId }
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
