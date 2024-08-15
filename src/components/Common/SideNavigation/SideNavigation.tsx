'use client'

import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

import SideNavigationItem from '@/components/Common/SideNavigation/SideNavigationItem'
import { SIDE_NAV_ITEMS } from '@/lib/constants/common.constants'

export const SideNavigation = () => {
  const handleLogout = () => {
    signOut()
  }
  const path = usePathname()
  console.log(path)
  return (
    <div className='flex flex-col gap-2.5'>
      {SIDE_NAV_ITEMS.map((item) => (
        <SideNavigationItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          onClick={item.title === 'Logout' ? handleLogout : undefined}
          href={item.href}
          isSelected={path === item.href}
        />
      ))}
    </div>
  )
}
