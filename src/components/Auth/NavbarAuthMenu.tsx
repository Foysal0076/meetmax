'use client'

import { signOut, useSession } from 'next-auth/react'

import Avatar from '@/components/Common/Avatar'

const NavbarAuthMenu = () => {
  const { data: session, status } = useSession()
  const isLogged = status === 'authenticated'
  // const isNotLogged = status === 'unauthenticated'
  const user = session?.user

  const handleLogout = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <>
      {isLogged ? (
        <div className='flex items-center gap-5'>
          <p className='hidden text-display font-medium md:block'>
            {user?.name}
          </p>
          <Avatar
            className='h-[2.625rem] w-[2.625rem] rounded-2xl'
            fullname={user?.name ?? ''}
            avatarUrl='/assets/images/dummy/avatar4.png'
          />
        </div>
      ) : null}
    </>
  )
}

export default NavbarAuthMenu
