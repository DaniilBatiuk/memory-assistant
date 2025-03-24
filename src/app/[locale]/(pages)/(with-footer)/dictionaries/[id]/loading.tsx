import { Skeleton } from '@/components/ui'

import { DictionariesLoading } from './components/dictionary-list/components/dictionaries-loading/dictionaries-loading'

export default function Loading() {
  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
        <Skeleton className='adaptive-height-45-60 adaptive-width-176-234' />
        <Skeleton className='h-[36px] w-[76px] rounded-md' />
      </div>
      <div>
        <DictionariesLoading />
      </div>
    </div>
  )
}
