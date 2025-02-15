import { CartesiaClient } from '@cartesia/cartesia-js'

import { LanguageCode } from '@/constants'

import { errorCatch } from '@/helpers'

export const AudioApi = {
  getAudioUrl: errorCatch(
    async ({ text, lang }: { text: string; lang: keyof typeof LanguageCode }) => {
      const client = new CartesiaClient({
        apiKey: process.env.NEXT_PUBLIC_CARTESIA_API_KEY!,
      })

      const response = await client.tts.bytes({
        modelId: 'sonic',
        transcript: text,
        voice: {
          mode: 'id',
          id: '6abbeca5-3837-4ee2-ac0e-30c2426948d9',
        },
        language: LanguageCode[lang],
        outputFormat: {
          container: 'wav',
          sampleRate: 44100,
          encoding: 'pcm_f32le',
        },
      })

      const blob = new Blob([response], { type: 'audio/wav' })
      const url = URL.createObjectURL(blob)

      return url
    },
  ),
}
