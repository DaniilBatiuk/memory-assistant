import { LANGUAGE_CODE_FOR_AUDIO } from '@/constants'

export const playAudio = ({ word, lang }: { word: string; lang: string }) => {
  const speakText = (text: string, lang = 'English') => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    speechSynthesis.speak(utterance)
  }

  speakText(word, LANGUAGE_CODE_FOR_AUDIO[lang])
}
