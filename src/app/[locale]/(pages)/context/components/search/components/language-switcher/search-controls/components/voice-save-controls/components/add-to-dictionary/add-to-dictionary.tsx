import { Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'

export const AddToDictionary: React.FC = () => {
  const t = useTranslations('Context')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='iconLg'
          className='!ring-0 [&_svg]:size-[1.35rem]'
          aria-label='save'
          type='button'
        >
          <Star />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-[15px] w-56'>
        <DropdownMenuLabel>{t('myDictionaries')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='truncate'>En-Ru</DropdownMenuItem>
          <DropdownMenuItem className='truncate'>Ru-En</DropdownMenuItem>
          <DropdownMenuItem className='truncate'>Fr-Ru</DropdownMenuItem>
          <DropdownMenuItem className='truncate'>Ru-Rn</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
