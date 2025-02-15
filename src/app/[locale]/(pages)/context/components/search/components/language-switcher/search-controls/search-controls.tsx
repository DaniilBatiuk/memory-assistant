import { useQuery } from '@tanstack/react-query'
import { SearchIcon, Star, Volume2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Button, Input } from '@/components/ui'

import { AudioApi } from '@/shared/modules/audio-api'

interface SearchControlsProps {
  searchPlaceholder: string
}

export const SearchControls: React.FC<SearchControlsProps> = ({
  searchPlaceholder,
}: SearchControlsProps) => {
  const searchParams = useSearchParams()
  const searchSearchParam = searchParams.get('search')
  const langFrom = searchParams.get('from')

  const { data: audioUrl } = useQuery({
    queryKey: ['audio', searchSearchParam, langFrom],
    queryFn: () =>
      AudioApi.getAudioUrl({
        text: searchSearchParam ?? '',
        lang: langFrom ?? 'English',
      }),
    enabled: Boolean(searchSearchParam),
  })

  const playAudio = async () => {
    if (!audioUrl || !audioUrl.success) return

    const audio = new Audio(audioUrl.data ?? '')
    audio.play()
  }

  return (
    <div className='m-auto flex max-w-[675px] items-center gap-4 max-[510px]:flex-col'>
      <div className='flex flex-1 items-center max-[510px]:w-full'>
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
      <div className='flex items-center justify-between gap-3 max-[510px]:w-full'>
        <h3 className='truncate text-2xl font-semibold text-border-accent min-[510px]:hidden'>
          {searchSearchParam}
        </h3>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='iconLg'
            className='[&_svg]:size-[1.35rem]'
            aria-label='voice'
            type='button'
            onClick={playAudio}
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
    </div>
  )
}
