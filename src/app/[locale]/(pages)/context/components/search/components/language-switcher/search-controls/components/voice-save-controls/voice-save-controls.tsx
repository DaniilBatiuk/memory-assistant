import { useQuery } from '@tanstack/react-query'
import { Volume2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui'

import { AudioApi } from '@/shared/modules/audio-api'

import { AddToDictionary } from './components/add-to-dictionary/add-to-dictionary'

export const VoiceSaveControls: React.FC = () => {
  const searchParams = useSearchParams()
  const searchFromParam = searchParams.get('search')
  const fromFromParam = searchParams.get('from')

  const { data: audioUrl } = useQuery({
    queryKey: ['audio', searchFromParam, fromFromParam],
    queryFn: () =>
      AudioApi.getAudioUrl({
        text: searchFromParam ?? '',
        lang: fromFromParam ?? '',
      }),
    enabled: Boolean(searchFromParam),
  })

  const playAudio = async () => {
    if (!audioUrl || !audioUrl.success) return

    const audio = new Audio(audioUrl.data ?? '')
    audio.play()
  }

  return (
    <div className='flex items-center justify-between gap-3 max-[510px]:w-full'>
      <h3 className='truncate text-2xl font-semibold text-border-accent min-[510px]:hidden'>
        {searchFromParam}
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
        <AddToDictionary />
      </div>
    </div>
  )
}
