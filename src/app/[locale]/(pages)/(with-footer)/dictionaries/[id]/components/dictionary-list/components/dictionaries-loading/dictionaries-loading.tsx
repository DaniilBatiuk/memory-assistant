import { Skeleton } from '@/components/ui'

export const DictionariesLoading: React.FC = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className='relative flex flex-col gap-[5px] border-b py-4 pr-11'>
          <Skeleton className='w-1/6 min-w-[100px] adaptive-height-30-36' />
          <Skeleton className='h-[24px] w-1/2 min-w-[200px]' />
          <Skeleton className='absolute right-0 top-3 size-[36px]' />
        </div>
      ))}
    </>
  )
}
