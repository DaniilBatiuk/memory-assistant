interface ExampleItemProps {
  example: Example
  translations: string[]
  textToTranslate: string
}
export const ExampleItem: React.FC<ExampleItemProps> = ({
  example,
  translations,
  textToTranslate,
}: ExampleItemProps) => {
  const regexFrom = new RegExp(`(?<!\\p{L})${textToTranslate}(?!\\p{L})`, 'iu')
  const matchFrom = regexFrom.exec(example.source)

  const matchingTo = translations.find(t =>
    new RegExp(`(?<!\\p{L})${t}(?!\\p{L})`, 'iu').test(example.target),
  )

  const regexTo = new RegExp(`(?<!\\p{L})${matchingTo}(?!\\p{L})`, 'iu')
  const matchTo = regexTo.exec(example.target)

  if (!matchFrom) {
    return null
  }

  return (
    <div className='flex justify-between gap-7 border-b py-4 first:pt-0 max-[750px]:flex-col max-[750px]:gap-2'>
      <span className='w-1/2 text-foreground/55 max-[750px]:w-full'>
        {example.source.slice(0, matchFrom.index)}
        <em className='bg-accent-text not-italic underline underline-offset-[3px] dark:text-background'>
          {example.source.slice(matchFrom.index, matchFrom.index + textToTranslate.length)}
        </em>
        {example.source.slice(matchFrom.index + textToTranslate.length)}
      </span>
      {!matchTo || !matchingTo ? (
        <span className='w-1/2 max-[750px]:w-full'>{example.target}</span>
      ) : (
        <span className='w-1/2 max-[750px]:w-full'>
          {example.target.slice(0, matchTo.index)}
          <em className='bg-accent-text not-italic underline underline-offset-[3px] dark:text-background'>
            {example.target.slice(matchTo.index, matchTo.index + matchingTo.length)}
          </em>
          {example.target.slice(matchTo.index + matchingTo.length)}
        </span>
      )}
    </div>
  )
}
