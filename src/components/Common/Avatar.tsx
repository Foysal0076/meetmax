import Image from 'next/image'

import { createInitials } from '@/lib/helpers'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullname?: string
  avatarUrl?: string
}

const Avatar = ({ className = '', fullname = '', avatarUrl = '' }: Props) => {
  const initials = avatarUrl ? '' : createInitials(fullname)

  //check if the className has round class if not add it
  className = className.includes('rounded-')
    ? className
    : `${className} rounded-full`

  //check if the className has h- w- class if not add it,  if both are present do nothing
  className =
    className.includes('h-') && className.includes('w-')
      ? className
      : `${className} h-[3.125rem] w-[3.125rem]`

  if (!avatarUrl) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-100 text-lg font-bold dark:bg-neutral-500`}>
        {initials}
      </div>
    )
  }

  return (
    <div className={`${className} relative`}>
      <Image
        src={avatarUrl}
        alt={fullname ?? 'avatar'}
        className={`object-cover`}
        fill
      />
    </div>
  )
}

export default Avatar
