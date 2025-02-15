interface TranslationItemProps {
  translation: string
}

export const TranslationItem: React.FC<TranslationItemProps> = ({
  translation,
}: TranslationItemProps) => {
  return (
    <div className='rounded-md border-t-2 border-border-accent bg-foreground/5 px-3 py-2 text-center'>
      {translation}
    </div>
  )
}
