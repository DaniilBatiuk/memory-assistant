import { LANGUAGES } from '@/constants'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select/select'

interface SelectLanguageProps {
  value: string
  onChangeValue: (value: string) => void
  excludeValue: string
  name?: string
}

export const SelectLanguage: React.FC<SelectLanguageProps> = ({
  onChangeValue,
  excludeValue,
  value,
  name,
}: SelectLanguageProps) => {
  return (
    <Select
      onValueChange={value => {
        if (value) onChangeValue(value)
      }}
      value={value}
      name={name}
    >
      <SelectTrigger className='w-[140px]' aria-label='languages'>
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {LANGUAGES.filter(lang => lang !== excludeValue).map(language => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
