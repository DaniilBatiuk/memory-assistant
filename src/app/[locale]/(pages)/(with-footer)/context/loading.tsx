import { Skeleton } from '@/components/ui'

export default function Loading() {
  return (
    <div className='container flex flex-col items-center adaptive-margin-top-20-60'>
      <Skeleton className='adaptive-height-45-60 adaptive-margin-bottom-10-15 adaptive-width-270-340' />
      <Skeleton className='w-full max-w-[400px] rounded-md adaptive-height-24-27 adaptive-margin-bottom-20-30' />

      <Skeleton className='mb-3 h-[36px] w-[310px] rounded-md' />
      <div className='flex w-full max-w-[675px] gap-4'>
        <Skeleton className='flex h-[48px] flex-1 items-center max-[510px]:w-full' />
        <div className='flex gap-2 max-[510px]:hidden'>
          <Skeleton className='size-[48px]' />
          <Skeleton className='size-[48px]' />
        </div>
      </div>
    </div>
  )
}
