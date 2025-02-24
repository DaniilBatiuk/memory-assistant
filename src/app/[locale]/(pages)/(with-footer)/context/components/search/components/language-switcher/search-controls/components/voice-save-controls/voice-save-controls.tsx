import { Volume2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui'

import { playAudio } from '@/helpers'

import { AddToDictionary } from './components/add-to-dictionary/add-to-dictionary'

export const VoiceSaveControls: React.FC = () => {
  const searchParams = useSearchParams()
  const searchFromParam = searchParams.get('search')
  const fromFromParam = searchParams.get('from')

  return (
    <div className='flex items-center justify-between gap-3 max-[510px]:w-full'>
      <h3 className='truncate text-2xl font-semibold text-border-accent min-[510px]:hidden'>
        {searchFromParam}
      </h3>
      <div className='flex gap-2'>
        <Button
          disabled={!!!searchFromParam || !!!fromFromParam}
          variant='outline'
          size='iconLg'
          className='[&_svg]:size-[1.35rem]'
          aria-label='voice'
          type='button'
          onClick={() =>
            playAudio({ word: searchFromParam ?? '', lang: fromFromParam ?? 'English' })
          }
        >
          <Volume2 />
        </Button>
        <AddToDictionary searchFromParam={searchFromParam} fromFromParam={fromFromParam} />
      </div>
    </div>
  )
}
