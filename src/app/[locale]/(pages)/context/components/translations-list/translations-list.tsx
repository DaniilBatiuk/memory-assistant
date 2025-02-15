import { TranslationItem } from './components/translation-item/translation-item'

interface TranslationsListProps {
  translations: string[]
  title: string
}

export const TranslationsList: React.FC<TranslationsListProps> = ({
  translations,
  title,
}: TranslationsListProps) => {
  return (
    <section className='adaptive-margin-top-20-40'>
      <h2 className='font-semibold adaptive-font-size-20-24 adaptive-margin-bottom-10-15'>
        {title}
      </h2>
      <div className='flex flex-wrap gap-2'>
        {translations.map(translation => (
          <TranslationItem key={translation} translation={translation} />
        ))}
      </div>
    </section>
  )
}
