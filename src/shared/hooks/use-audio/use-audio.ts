import { useQuery } from '@tanstack/react-query'

import { AudioApi } from '@/models'

interface IUseAudio {
  word: string
  lang: string
}

export const UseAudio = ({ word, lang }: IUseAudio) => {
  const { data: audioUrl } = useQuery({
    queryKey: ['audio', word, lang],
    queryFn: () =>
      AudioApi.getAudioUrl({
        text: word,
        lang: lang,
      }),
  })

  const playAudio = async () => {
    if (!audioUrl || !audioUrl.success) return

    const audio = new Audio(audioUrl.data ?? '')
    audio.play()
  }

  return { playAudio }
}
