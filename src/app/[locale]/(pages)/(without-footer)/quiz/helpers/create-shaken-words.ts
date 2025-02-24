export const createShakenWords = (dictionary: IDictionary) => {
  // Перемешиваем слова
  const shuffledWords = [...dictionary.words].sort(() => Math.random() - 0.5)

  return shuffledWords.map(wordObj => {
    // Разделяем строку translations по запятой и берём первый элемент
    const correctTranslation = wordObj.translations.split(',')[0]?.trim()

    // Выбираем 3 случайных других слова из translations других объектов
    const randomTranslations = dictionary.words
      .filter(w => w.id !== wordObj.id) // Исключаем текущее слово
      .map(w => w.translations.split(',')[0]?.trim()) // Берём первый перевод
      .filter(t => t && t !== correctTranslation) // Исключаем пустые и дубли
      .sort(() => Math.random() - 0.5) // Перемешиваем
      .slice(0, 3) // Берём 3 случайных

    // Создаём массив вариантов
    const variants = [...randomTranslations, correctTranslation]
      .sort(() => Math.random() - 0.5) // Перемешиваем
      .map(variant => ({
        variant,
        isRight: variant === correctTranslation,
      }))

    return {
      id: wordObj.id,
      word: wordObj.word,
      variants,
    }
  })
}
