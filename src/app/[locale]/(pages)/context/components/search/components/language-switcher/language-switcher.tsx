'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Button, SelectLanguage } from '@/components/ui'

import { ICONS, LANGUAGES } from '@/constants'

export const LanguageSwitcher: React.FC = () => {
  const searchParams = useSearchParams()
  const fromSearchParam = searchParams.get('from')
  const toSearchParam = searchParams.get('to')

  const [from, setFrom] = useState(() => fromSearchParam ?? LANGUAGES[1])
  const [to, setTo] = useState(() => toSearchParam ?? LANGUAGES[6])

  const switchLanguages = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <div className='mb-3 flex justify-center space-x-1 [&_button]:border-[0px] [&_button]:!ring-0'>
      <SelectLanguage
        value={from}
        name='from'
        onChangeValue={value => setFrom(value)}
        excludeValue={to}
      />
      <Button
        variant='ghost'
        size='icon'
        className='[&_svg]:size-[1.5rem]'
        onClick={switchLanguages}
        type='button'
      >
        {ICONS.switch()}
      </Button>
      <SelectLanguage
        name='to'
        value={to}
        onChangeValue={value => setTo(value)}
        excludeValue={from}
      />
    </div>
  )
}
