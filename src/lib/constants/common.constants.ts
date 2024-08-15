import { NavItemType } from '@/lib/types/common.types'

export const LOCAL_STORAGE_THEME_KEY = 'theme'
export const SIDE_NAV_ITEMS: NavItemType[] = [
  {
    title: 'Feed',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    title: 'Community',
    icon: 'CommunityIcon',
    href: '/my-community',
  },
  {
    title: 'Messages',
    icon: 'MessageIcon',
    href: '/messages',
  },
  {
    title: 'Notification',
    icon: 'NotificationIcon',
    href: '/notifications',
  },
  {
    title: 'Explore',
    icon: 'ExploreIcon',
    href: '/explore',
  },
  {
    title: 'Profile',
    icon: 'UserIcon',
    href: '/profile',
  },
  {
    title: 'Settings',
    icon: 'SettingsIcon',
    href: '/settings',
  },
  {
    title: 'Logout',
    icon: 'LogoutIcon',
    href: '',
  },
]
