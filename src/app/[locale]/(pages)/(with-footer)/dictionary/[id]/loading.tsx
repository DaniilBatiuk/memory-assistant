import { Skeleton } from '@/components/ui'

export default function Loading() {
  return (
    <div className='container adaptive-margin-top-20-60'>
      <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
        <Skeleton className='adaptive-height-45-60 adaptive-width-176-234' />
        <Skeleton className='h-[36px] w-[62px] rounded-md' />
      </div>
      <div>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='relative flex items-center gap-2 border-b py-4'>
            <Skeleton className='size-[46px]' />
            <div className='flex flex-1 flex-col gap-[5px] overflow-hidden pr-11'>
              <Skeleton className='w-1/6 min-w-[100px] adaptive-height-30-36' />
              <Skeleton className='h-[24px] w-1/2 min-w-[200px]' />
              <Skeleton className='absolute right-0 top-3 size-[36px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
