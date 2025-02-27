import { Skeleton } from '@/components/ui'

export const ContextSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <Skeleton className='mb-3 h-[36px] w-full max-w-[310px] rounded-md' />
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
