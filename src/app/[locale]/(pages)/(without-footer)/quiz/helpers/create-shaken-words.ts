export const createShakenWords = (dictionary: IDictionary) => {
  const shuffledWords = [...dictionary.words].sort(() => Math.random() - 0.5)

  return shuffledWords.map(wordObj => {
    const correctTranslation = wordObj.translations.split(',')[0]?.trim()

    const randomTranslations = dictionary.words
      .filter(w => w.id !== wordObj.id)
      .map(w => w.translations.split(',')[0]?.trim())
      .filter(t => t && t !== correctTranslation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    const variants = [...randomTranslations, correctTranslation]
      .sort(() => Math.random() - 0.5)
      .map(variant => ({
        variant,
        isRight: variant === correctTranslation,
      }))

    return {
      id: wordObj.id,
      word: wordObj.word,
      language: wordObj.language,
      variants,
    }
  })
}
