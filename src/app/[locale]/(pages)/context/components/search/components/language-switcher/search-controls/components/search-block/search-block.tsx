import { SearchIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import { Button, Input } from '@/components/ui'

export const SearchBlock: React.FC = () => {
  const t = useTranslations('Context')
  const searchParams = useSearchParams()
  const searchFromParam = searchParams.get('search')

  return (
    <div className='relative flex flex-1 items-center max-[510px]:w-full'>
      <Input
        placeholder={t('placeholder')}
        size={'md'}
        name='search'
        className='rounded-r-none border-r-0 !ring-0 focus:border-foreground'
        autoComplete='off'
        defaultValue={searchFromParam ?? ''}
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
  )
}
