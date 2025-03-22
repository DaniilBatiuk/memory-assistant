'use client'

import { DndContext, rectIntersection } from '@dnd-kit/core'
import { SortableContext, rectSwappingStrategy } from '@dnd-kit/sortable'

import { TranslationItem } from './components/translation-item/translation-item'
import { useTranslationsList } from './hooks/use-translations-list'

interface TranslationsListProps {
  translations: Definition[]
  title: string
}

export const TranslationsList: React.FC<TranslationsListProps> = ({
  translations,
  title,
}: TranslationsListProps) => {
  const { handleDragEnd, items } = useTranslationsList({ translations })

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
