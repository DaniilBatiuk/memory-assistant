import { signOut } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

interface UserDropDownProps {
  user: {
    id: string
    name: string
    imageUrl?: string
  }
}

export const UserDropDown: React.FC<UserDropDownProps> = ({ user }: UserDropDownProps) => {
  const t = useTranslations('Header')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='size-9 cursor-pointer max-[550px]:hidden'>
          <AvatarImage referrerPolicy='no-referrer' src={user.imageUrl} alt='' />
          <AvatarFallback>{`${user.name.split(' ')[0][0]} ${user.name.split(' ')[1][0]}`}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='mr-[15px] w-32'>
        <DropdownMenuGroup>
          <Link href={LINKS.Dictionaries + '/' + user.id}>
            <DropdownMenuItem className='cursor-pointer'>{t('dictionaries')}</DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            className='cursor-pointer text-red focus:bg-red/10 focus:text-red'
            onClick={() => signOut({ callbackUrl: LINKS.Home })}
          >
            {t('signOut')}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
