import { useTranslations } from 'next-intl'

export const NoDictionaries: React.FC = () => {
  const t = useTranslations('Dictionaries')
  return (
    <div className='flex items-center justify-center rounded-md border bg-foreground/3 px-4 adaptive-margin-top-20-40 adaptive-padding-block-20-60'>
      <h2 className='text-center font-semibold adaptive-font-size-18-20'>
        {t('noDictionariesText')}
      </h2>
    </div>
  )
}
