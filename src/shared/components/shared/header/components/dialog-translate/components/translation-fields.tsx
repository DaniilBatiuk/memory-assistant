import { useTranslations } from 'next-intl'

import { Textarea } from '@/components/ui'

import { cn } from '@/lib'

interface TranslationFieldsProps {
  search: string
  setSearch: (value: string) => void
  translation: any
  isFetching: boolean
  debouncedSearch: string
}

export const TranslationFields: React.FC<TranslationFieldsProps> = ({
  search,
  setSearch,
  translation,
  isFetching,
  debouncedSearch,
}: TranslationFieldsProps) => {
  const t = useTranslations('TranslationDialog')

  return (
    <div className='flex gap-4 max-[700px]:flex-col'>
      <Textarea
        placeholder={t('from')}
        value={search}
        className='scrollbar-thin h-[300px] resize-none max-[700px]:h-[200px]'
        onChange={e => setSearch(e.target.value)}
      />
      <Textarea
        placeholder={t('to')}
        className={cn('scrollbar-thin h-[300px] resize-none !ring-0 max-[700px]:h-[200px]', {
          'text-foreground/40': isFetching || search !== debouncedSearch,
        })}
        readOnly
        value={translation && translation.success ? translation.data.translations[0] : ''}
      />
    </div>
  )
}
