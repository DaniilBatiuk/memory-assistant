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
}

export const SelectLanguage: React.FC<SelectLanguageProps> = ({
  onChangeValue,
  value,
}: SelectLanguageProps) => {
  return (
    <Select onValueChange={value => onChangeValue(value)} value={value}>
      <SelectTrigger className='w-[140px]'>
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {LANGUAGES.map(language => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
