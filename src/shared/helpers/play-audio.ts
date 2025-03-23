import { LANGUAGE_CODE_FOR_AUDIO } from '@/constants'

export const playAudio = ({ word, lang }: { word: string; lang: string }) => {
  const speakText = (text: string, lang = 'English') => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

    const voices = speechSynthesis.getVoices()

    utterance.voice =
      voices.find(voice => voice.lang === lang) ||
      voices.find(voice => voice.lang === 'en-US') ||
      voices[0]

    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }

  speakText(word, LANGUAGE_CODE_FOR_AUDIO[lang])
}
