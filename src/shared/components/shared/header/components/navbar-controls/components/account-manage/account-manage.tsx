'use client'

import { useSession } from 'next-auth/react'

import { Skeleton } from '@/components/ui'

import { SignInButton } from './components/sign-in-button'
import { UserDropDown } from './components/user-drop-down'

export const AccountManage: React.FC = () => {
  const { data: session } = useSession()

  if (session === undefined)
    return <Skeleton className='h-[36px] w-[77px] rounded max-[550px]:hidden' />

  return session ? <UserDropDown user={session.user} /> : <SignInButton />
}
