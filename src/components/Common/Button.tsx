import { cva } from 'class-variance-authority'
import clsx from 'clsx'

import Spinner from '@/components/Common/Spinner'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'green'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  loading?: boolean
}

const ButtonVariants = cva(
  'rounded-lg text-white focus:ring-4 disabled:active:transform-none active:scale-[.9] disabled:cursor-not-allowed transition-all duration-300 text-nowrap outline-none focus:outline-none font-medium',
  {
    variants: {
      color: {
        primary:
          'bg-primary-500 disabled:text-primary-200 disabled:bg-primary-50 hover:bg-primary-600 focus:ring-primary-200 ',
        secondary:
          'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-200 disabled:text-secondary-200 disabled:bg-secondary-50',
        warning:
          'bg-warning-500 hover:bg-warning-600 focus:ring-warning-200 disabled:text-warning-200 disabled:bg-warning-50',
        danger:
          'bg-danger-500 hover:bg-danger-600 focus:ring-danger-200 disabled:text-danger-200 disabled:bg-danger-50',
        green:
          'bg-green-500 hover:bg-green-600 focus:ring-green-200 disabled:text-green-200 disabled:bg-green-50',
      },
      size: {
        xs: 'h-[1.75rem] text-xs px-4',
        sm: 'h-[2rem] text-sm px-4',
        md: 'h-[2.5rem] text-md px-4',
        lg: 'h-[3.125rem] text-lg px-4',
        xl: 'h-[3.5rem] text-lg px-4',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
)

const Button = ({
  color = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `relative select-none`,
        `${ButtonVariants({ color, size })}`,
        `${className}`
      )}
      disabled={loading}
      {...buttonProps}>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <Spinner className='text-current' />
        </div>
      )}
      <div
        className={clsx(`font-Rubik visible`, {
          invisible: loading,
          'opacity-0': loading,
        })}>
        {children}
      </div>
    </button>
  )
}

export default Button
