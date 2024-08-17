import { cva } from 'class-variance-authority'

import { ShortUserInfo } from '@/lib/constants/dummy.constants'

type Props = {
  avatars: ShortUserInfo[]
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Variants = cva('', {
  variants: {
    size: {
      sm: 'h-[1.375rem] w-[1.375rem]',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-[3.125rem] w-[3.125rem]',
      '2xl': 'h-16 w-16',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const GroupAvatar = ({ avatars, size = 'sm' }: Props) => {
  const totalAvatar = avatars.length
  const moreCount = totalAvatar - 3 > 0 ? totalAvatar - 3 : 0
  const spacing = ['sm', 'md'].includes(size) ? '-space-x-2' : '-space-x-4'
  const fontSize = ['sm', 'md'].includes(size) ? 'text-body-3' : 'text-base'

  return (
    <div className={`flex rtl:space-x-reverse ${spacing}`}>
      {avatars.slice(0, 3).map((avatar, index) => (
        <div
          key={index}
          className={`${Variants({ size })} rounded-full border-2 border-white rtl:ml-1`}>
          <img
            className='h-full w-full rounded-full object-cover'
            src={avatar.avatarUrl}
            alt={avatar.fullname}
          />
        </div>
      ))}
      {moreCount > 0 && (
        <div
          className={`${Variants({ size })} flex items-center justify-center rounded-full bg-neutral-100 ${fontSize} font-medium text-neutral-0 rtl:ml-1`}>
          +{moreCount}
        </div>
      )}
    </div>
  )
}

export default GroupAvatar
