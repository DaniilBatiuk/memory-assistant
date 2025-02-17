'use client'

import { DndContext, rectIntersection } from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSwappingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'

import { TranslationItem } from './components/translation-item/translation-item'

interface TranslationsListProps {
  translations: string[]
  title: string
}

export const TranslationsList: React.FC<TranslationsListProps> = ({
  translations,
  title,
}: TranslationsListProps) => {
  const [items, setItems] = useState<string[]>(translations)

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)
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
        <SortableContext items={items} strategy={rectSwappingStrategy}>
          <div className='flex flex-wrap gap-2'>
            {items.map(translation => (
              <TranslationItem key={translation} translation={translation} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  )
}
