import { SearchIcon, Star, Volume2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Button, Input } from '@/components/ui'

interface SearchControlsProps {
  searchPlaceholder: string
}

export const SearchControls: React.FC<SearchControlsProps> = ({
  searchPlaceholder,
}: SearchControlsProps) => {
  const searchParams = useSearchParams()
  const searchSearchParam = searchParams.get('search')

  return (
    <div className='m-auto flex max-w-[675px] items-center gap-4'>
      <div className='flex flex-1 items-center'>
        <Input
          placeholder={searchPlaceholder}
          size={'md'}
          name='search'
          defaultValue={searchSearchParam ?? ''}
          className='rounded-r-none border-r-0 !ring-0 focus:border-foreground'
        />
        <Button
          size={'md'}
          className='rounded-l-none [&_svg]:size-[1.5rem]'
          aria-label='search'
          type='submit'
        >
          <SearchIcon />
        </Button>
      </div>
      <div className='flex gap-2 max-[510px]:hidden'>
        <Button
          variant='outline'
          size='iconLg'
          className='[&_svg]:size-[1.35rem]'
          aria-label='voice'
          type='button'
        >
          <Volume2 />
        </Button>
        <Button
          variant='outline'
          size='iconLg'
          className='[&_svg]:size-[1.35rem]'
          aria-label='save'
          type='button'
        >
          <Star />
        </Button>
      </div>
    </div>
  )
}
