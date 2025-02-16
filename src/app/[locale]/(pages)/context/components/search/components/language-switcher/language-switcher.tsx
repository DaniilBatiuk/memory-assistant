'use client'

import { useSearchParams } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useShallow } from 'zustand/shallow'

import { Button, SelectLanguage } from '@/components/ui'

import { ICONS } from '@/constants'

import { useContextStore } from '@/store'

export const LanguageSwitcher: React.FC = () => {
  const searchParams = useSearchParams()
  const searchFromParam = searchParams.get('search')
  const fromFromParam = searchParams.get('from')
  const toFromParam = searchParams.get('to')

  const { setFrom, setTo, from, to, setSearch } = useContextStore(
    useShallow(state => ({
      setFrom: state.setFrom,
      setTo: state.setTo,
      from: state.from,
      to: state.to,
      setSearch: state.setSearch,
    })),
  )

  useLayoutEffect(() => {
    setSearch(searchFromParam || '')
    setFrom(fromFromParam || 'English')
    setTo(toFromParam || 'Russian')
  }, [searchFromParam, fromFromParam, toFromParam])

  const switchLanguages = () => {
    setSearch('')
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
