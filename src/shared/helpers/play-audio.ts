import { LANGUAGE_CODE_FOR_AUDIO } from '@/constants'

export const playAudio = ({ word, lang }: { word: string; lang: string }) => {
  const speakText = async (text: string, lang = 'English') => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    const loadVoices = (): Promise<SpeechSynthesisVoice[]> =>
      new Promise(resolve => {
        let voices = speechSynthesis.getVoices()
        if (voices.length) return resolve(voices)

        const onVoicesChanged = () => {
          voices = speechSynthesis.getVoices()
          resolve(voices)
          speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
        }

        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
      })

    const voices = await loadVoices()
    utterance.voice =
      voices.find(voice => voice.lang === lang) ||
      voices.find(voice => voice.lang === 'en-US') ||
      voices[0]
    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }

  speakText(word, LANGUAGE_CODE_FOR_AUDIO[lang])
}
