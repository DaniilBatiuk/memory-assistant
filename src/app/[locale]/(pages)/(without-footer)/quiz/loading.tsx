import { Skeleton } from '@/components/ui'

export default function Loading() {
  return (
    <div className='container relative flex-auto adaptive-margin-top-40-60'>
      <div className='flex flex-col items-center'>
        <Skeleton className='adaptive-height-45-60 adaptive-width-176-234' />
        <Skeleton className='mt-2 w-[300px] adaptive-height-24-27' />
        <Skeleton className='absolute right-[15px] top-[-20px] h-[24px] w-[33px]' />
        <div className='absolute left-0 flex w-full flex-col gap-2 px-[15px] adaptive-bottom-20-60'>
          <Skeleton className='h-[54px] w-full' />
          <Skeleton className='h-[54px] w-full' />
          <Skeleton className='h-[54px] w-full' />
          <Skeleton className='h-[54px] w-full' />
        </div>
      </div>
    </div>
  )
}
