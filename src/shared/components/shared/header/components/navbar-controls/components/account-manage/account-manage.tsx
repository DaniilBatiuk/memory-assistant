'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
} from '@/components/ui'

import { LINKS } from '@/constants'

import { Link } from '@/i18n'

export const AccountManage: React.FC = () => {
  const t = useTranslations('Header')

  const { data: session } = useSession()

  if (session === undefined)
    return <Skeleton className='h-[36px] w-[77px] rounded max-[550px]:hidden' />

  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='size-9 cursor-pointer max-[550px]:hidden'>
              <AvatarImage referrerPolicy='no-referrer' src={session.user.imageUrl} alt='user' />
              <AvatarFallback>{`${session.user.name.split(' ')[0][0]} ${session.user.name.split(' ')[1][0]}`}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start' className='mr-[15px] w-32'>
            <DropdownMenuGroup>
              <Link href={LINKS.Dictionaries}>
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
      ) : (
        <Button
          className='max-[550px]:hidden'
          onClick={() =>
            signIn('google', {
              callbackUrl: LINKS.Home,
              redirect: true,
            })
          }
        >
          {t('signIn')}
        </Button>
      )}
    </>
  )
}
