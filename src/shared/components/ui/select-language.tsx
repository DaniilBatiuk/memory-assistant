import { LANGUAGES } from '@/constants'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

interface SelectLanguageProps {
  value: string
  onChangeValue: (value: string) => void
  excludeValue: string
}

export const SelectLanguage: React.FC<SelectLanguageProps> = ({
  onChangeValue,
  excludeValue,
  value,
}: SelectLanguageProps) => {
  return (
    <Select onValueChange={value => onChangeValue(value)} value={value}>
      <SelectTrigger className='w-[140px]'>
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
