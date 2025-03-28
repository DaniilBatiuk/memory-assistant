import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/shallow'

import { useContextStore } from '@/store'

interface IUseTranslationsList {
  translations: Definition[]
}

export const useTranslationsList = ({ translations }: IUseTranslationsList) => {
  const [items, setItems] = useState<Translation[]>(() =>
    translations.map(translation => translation.tr).flat(),
  )

  const { setTranslations } = useContextStore(
    useShallow(state => ({
      setTranslations: state.setTranslations,
    })),
  )

  useEffect(() => {
    setItems(translations.map(translation => translation.tr).flat())
    setTranslations(
      translations
        .map(translation => translation.tr.map(translation => translation.text))
        .flat()
        .join(', '),
    )
  }, [translations, setTranslations])

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.text === active.id)
        const newIndex = items.findIndex(item => item.text === over.id)
        setTranslations(
          arrayMove(items, oldIndex, newIndex)
            .map(item => item.text)
            .join(', '),
        )
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return { items, handleDragEnd }
}
