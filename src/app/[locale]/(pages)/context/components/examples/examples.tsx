import { ExampleItem } from './components/example-item/example-item'

interface ExamplesProps {
  examples: Example[]
  translations: string[]
  title: string
  textToTranslate: string
}

export const Examples: React.FC<ExamplesProps> = ({
  examples,
  title,
  translations,
  textToTranslate,
}: ExamplesProps) => {
  return (
    <section className='adaptive-margin-top-20-40 [&>div:empty]:hidden'>
      <h2 className='font-semibold adaptive-font-size-20-24 adaptive-margin-bottom-10-15'>
        {title}
      </h2>
      <div>
        {examples.map(example => (
          <ExampleItem
            key={example.id}
            example={example}
            translations={translations}
            textToTranslate={textToTranslate}
          />
        ))}
      </div>
    </section>
  )
}
