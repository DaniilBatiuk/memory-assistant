import { useTranslations } from 'next-intl'

import { Textarea } from '@/components/ui'

import { cn } from '@/lib'

import { useTranslationDialog } from '../hooks/use-translation-dialog'

export const TranslationFields: React.FC = () => {
  const t = useTranslations('TranslationDialog')

  const { search, setSearch, translation, isFetching, debouncedSearch } = useTranslationDialog()

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
