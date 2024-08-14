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
        <div className='flex gap-2'>
          <Avatar fullname={user?.name ?? ''} />
          <button onClick={handleLogout} className=''>
            Logout
          </button>
        </div>
      ) : (
        <a href='/auth/login' className=''>
          Login
        </a>
      )}
    </>
  )
}

export default NavbarAuthMenu
