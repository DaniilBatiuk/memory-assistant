import { useMutation } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

import { addWordToDictionary } from '@/actions'

import { getDictionaryQueryOptions, getQueryClient } from '../lib'

export const useWordAdd = (dictionaryId: string) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: addWordToDictionary,

    onMutate: async (newDictionary: IWordCreate) => {
      await queryClient.cancelQueries({
        queryKey: getDictionaryQueryOptions(dictionaryId).queryKey,
      })

      const tempId = uuidv4()
      const previousDictionary = queryClient.getQueryData<IDictionary>(
        getDictionaryQueryOptions(dictionaryId).queryKey,
      )

      if (previousDictionary) {
        const filteredWords = previousDictionary.words.filter(
          word => word.word !== newDictionary.word,
        )
        queryClient.setQueryData<IDictionary>(getDictionaryQueryOptions(dictionaryId).queryKey, {
          ...previousDictionary,
          words: [{ ...newDictionary, id: tempId, createdAt: new Date() }, ...filteredWords],
        })
      }

      return { previousDictionary, tempId }
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
