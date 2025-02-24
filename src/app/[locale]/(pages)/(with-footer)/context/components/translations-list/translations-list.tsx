'use client'

import { DndContext, rectIntersection } from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSwappingStrategy } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/shallow'

import { useContextStore } from '@/store'

import { TranslationItem } from './components/translation-item/translation-item'

interface TranslationsListProps {
  translations: Definition[]
  title: string
}

export const TranslationsList: React.FC<TranslationsListProps> = ({
  translations,
  title,
}: TranslationsListProps) => {
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

  return (
    <section className='adaptive-margin-top-20-40'>
      <h2 className='font-semibold adaptive-font-size-20-24 adaptive-margin-bottom-10-15'>
        {title}
      </h2>
      <DndContext collisionDetection={rectIntersection} onDragEnd={handleDragEnd}>
        <SortableContext
          items={items.map(translation => translation.text)}
          strategy={rectSwappingStrategy}
        >
          <div className='flex flex-wrap gap-2'>
            {items.map(translation => (
              <TranslationItem key={translation.text} translation={translation} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  )
}
