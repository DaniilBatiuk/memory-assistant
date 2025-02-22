import { useMutation } from '@tanstack/react-query'

import { updateWord } from '@/actions'

import { UpdateWord } from '@/validators'

import { getDictionaryQueryOptions, getQueryClient } from '../lib'

export const useWordUpdate = (dictionaryId: string) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: updateWord,

    onMutate: async (updateWord: UpdateWord) => {
      await queryClient.cancelQueries({
        queryKey: getDictionaryQueryOptions(dictionaryId).queryKey,
      })

      const previousDictionary = queryClient.getQueryData<IDictionary>(
        getDictionaryQueryOptions(dictionaryId).queryKey,
      )

      if (previousDictionary) {
        queryClient.setQueryData<IDictionary>(getDictionaryQueryOptions(dictionaryId).queryKey, {
          ...previousDictionary,
          words: [
            ...previousDictionary.words.map(item =>
              item.id === updateWord.id ? { ...item, ...updateWord } : item,
            ),
          ],
        })
      }

      return { previousDictionary, updateWord }
    },

    // onSuccess: (updateWord, _, context) => {
    //     if (context) {
    //       queryClient.setQueryData<IDictionary>(
    //         getDictionaryQueryOptions(dictionaryId).queryKey,
    //         oldDictionary => {
    //           if (!oldDictionary) return oldDictionary
    //           return {
    //             ...oldDictionary,
    //             words: oldDictionary.words.map(word =>
    //               word.id === updateWord.id ? updateWord : word,
    //             ),
    //           }
    //         },
    //       )
    //     }
    // },

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
