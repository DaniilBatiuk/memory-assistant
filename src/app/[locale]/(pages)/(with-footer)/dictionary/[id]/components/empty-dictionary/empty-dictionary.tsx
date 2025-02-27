import { useTranslations } from 'next-intl'

export const EmptyDictionary: React.FC = () => {
  const t = useTranslations('Dictionary')
  return (
    <div className='flex items-center justify-center rounded-md border bg-foreground/3 px-4 adaptive-margin-top-20-40 adaptive-padding-block-20-60'>
      <h2 className='text-center font-semibold adaptive-font-size-18-20'>
        {t('noDictionaryText')}
      </h2>
    </div>
  )
}
