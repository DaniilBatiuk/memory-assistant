'use client'

import { Volume2 } from 'lucide-react'

import { Button } from '@/components/ui'

import { playAudio } from '@/helpers'

import { ActionDropDown } from './components/action-drop-down/action-drop-down'

interface DictionaryProps {
  word: IWordDto
}

export const WordItem: React.FC<DictionaryProps> = ({ word }: DictionaryProps) => {
  return (
    <div className='relative flex items-center gap-2 border-b py-4'>
      <Button
        variant='ghost'
        size='iconLg'
        className='shrink-0 [&_svg]:size-[1.35rem]'
        aria-label='voice'
        type='button'
        onClick={() => playAudio({ word: word.word, lang: word.language })}
      >
        <Volume2 />
      </Button>
      <div className='flex flex-1 flex-col gap-[5px] overflow-hidden pr-11'>
        <h2 className='truncate font-semibold text-border-accent adaptive-font-size-20-24'>
          {word.word}
        </h2>
        <p className='flex-1 truncate text-foreground/55'>{word.translations}</p>
        <ActionDropDown word={word} />
      </div>
    </div>
  )
}
