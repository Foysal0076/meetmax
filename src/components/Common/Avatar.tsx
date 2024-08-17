import Image from 'next/image'

import { createInitials } from '@/lib/helpers'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullname?: string
  avatarUrl?: string
}

const Avatar = ({ className = '', fullname = '', avatarUrl = '' }: Props) => {
  const initials = avatarUrl ? '' : createInitials(fullname)

  //check if the className has round class if not add it
  const roundedClassRegex = /rounded-[a-zA-Z0-9]+/g
  const roundedClassMatch = className.match(roundedClassRegex)
  const rounded = roundedClassMatch ? roundedClassMatch[0] : 'rounded-full'

  className = roundedClassMatch ? className : `${className} ${rounded}`

  //check if the className has h- w- class if not add it,  if both are present do nothing
  className =
    className.includes('h-') && className.includes('w-')
      ? className
      : `${className} h-[3.125rem] w-[3.125rem]`

  if (!avatarUrl) {
    const asciiValue = initials.charCodeAt(0)
    const colorClasses =
      asciiValue <= 71
        ? 'bg-primary-500/20 text-primary-500'
        : asciiValue <= 78
          ? 'bg-neutral-500/20 text-neutral-500'
          : asciiValue <= 84
            ? 'bg-secondary-500/20 text-secondary-500'
            : 'bg-danger-500/20 text-danger-500'

    return (
      <div
        className={`${className} ${colorClasses} flex items-center justify-center text-display font-medium`}>
        {initials}
      </div>
    )
  }

  return (
    <div className={`${className} relative`}>
      <Image
        src={avatarUrl}
        alt={fullname ?? 'avatar'}
        className={`${rounded} object-cover`}
        fill
        sizes='6.25rem'
      />
    </div>
  )
}

export default Avatar
