import { Button, SelectLanguage } from '@/components/ui'

import { ICONS } from '@/constants'

interface LanguagesProps {
  from: string
  to: string
  setFrom: (value: string) => void
  setTo: (value: string) => void
  switchLanguages: () => void
}

export const Languages: React.FC<LanguagesProps> = ({
  setFrom,
  setTo,
  from,
  to,
  switchLanguages,
}: LanguagesProps) => {
  return (
    <div className='mb-3 flex justify-center space-x-1 [&_button]:border-[0px] [&_button]:!ring-0'>
      <SelectLanguage value={from} onChangeValue={value => setFrom(value)} excludeValue={to} />
      <Button
        variant='ghost'
        size='icon'
        className='[&_svg]:size-[1.5rem]'
        onClick={switchLanguages}
      >
        {ICONS.switch()}
      </Button>
      <SelectLanguage value={to} onChangeValue={value => setTo(value)} excludeValue={from} />
    </div>
  )
}
