import { Skeleton } from '@/components/ui'

export const ControlsLoading: React.FC = () => {
  return (
    <div className='flex items-center justify-between adaptive-margin-bottom-20-30'>
      <Skeleton className='adaptive-height-45-60 adaptive-width-176-234' />
      <Skeleton className='h-[36px] w-[62px] rounded-md' />
    </div>
  )
}
