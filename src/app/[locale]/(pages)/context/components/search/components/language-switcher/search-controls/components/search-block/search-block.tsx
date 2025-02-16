import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui'

import { SuggestionDropdownMenuWithInput } from './components/suggestion-dropdown-menu/suggestion-dropdown-menu'

export const SearchBlock: React.FC = () => {
  return (
    <div className='relative flex flex-1 items-center max-[510px]:w-full'>
      <SuggestionDropdownMenuWithInput />
      <Button
        size={'md'}
        className='rounded-l-none [&_svg]:size-[1.5rem]'
        aria-label='search'
        type='submit'
      >
        <SearchIcon />
      </Button>
    </div>
  )
}
