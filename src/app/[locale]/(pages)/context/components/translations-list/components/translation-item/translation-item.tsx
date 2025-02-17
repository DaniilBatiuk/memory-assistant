import { useSortable } from '@dnd-kit/sortable'

interface TranslationItemProps {
  translation: string
}

export const TranslationItem: React.FC<TranslationItemProps> = ({
  translation,
}: TranslationItemProps) => {
  const { listeners, setNodeRef, transform, transition } = useSortable({
    id: translation,
  })

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
    cursor: 'grab',
    zIndex: 5,
  }

  return (
    <div
      className='z-0 shrink-0 rounded-md border-t-2 border-border-accent bg-[#F3F3F3] px-3 py-2 text-center dark:bg-[#151517]'
      ref={setNodeRef}
      style={style}
      {...listeners}
    >
      {translation}
    </div>
  )
}
