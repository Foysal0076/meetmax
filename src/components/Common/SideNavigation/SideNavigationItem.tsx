import clsx from 'clsx'
import Link from 'next/link'

import { Icon } from '@/components/Common/Icons'

type Props = {
  title: string
  icon: string
  href: string
  onClick?: () => void
  isSelected?: boolean
}

const SideNavigationItem = ({
  href,
  icon,
  title,
  isSelected,
  onClick,
}: Props) => {
  if (href.length > 0) {
    return (
      <Link
        href={href}
        className={clsx(
          'flex w-full cursor-pointer select-none items-center gap-4 rounded-large px-3 py-2 text-display font-medium lg:gap-5 lg:px-5 lg:py-3 lg:font-bold',
          {
            'bg-neutral-100 text-neutral-0': isSelected,
            'transition-colors duration-200 hover:bg-neutral-90 hover:text-neutral-0':
              !isSelected,
          }
        )}>
        <Icon name={icon} width={16} />
        {title}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      role='navigation'
      className={clsx(
        'flex w-full cursor-pointer select-none items-center gap-4 rounded-large px-3 py-2 text-display font-medium lg:gap-5 lg:px-5 lg:py-3 lg:font-bold',
        {
          'bg-neutral-100 text-neutral-0': isSelected,
          'transition-colors duration-200 hover:bg-neutral-90 hover:text-neutral-0':
            !isSelected,
        }
      )}>
      <Icon name={icon} width={16} />
      {title}
    </button>
  )
}

export default SideNavigationItem
