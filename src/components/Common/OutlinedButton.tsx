import { cva } from 'class-variance-authority'
import clsx from 'clsx'

import Spinner from '@/components/Common/Spinner'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'green' | 'neutral'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  loading?: boolean
}

const ButtonVariants = cva(
  'rounded-lg bg-none border-2 focus:ring-4 disabled:active:transform-none disabled:cursor-not-allowed dark:hover:bg-neutral-20/50 transition-all duration-300 text-nowrap focus:outline-none font-medium active:scale-[.9]',
  {
    variants: {
      color: {
        primary:
          'hover:bg-primary-50 border-primary-500/80 text-primary-500  focus:ring-primary-100 dark:text-primary-200 dark:border-primary-200 disabled:text-primary-200 disabled:border-primary-100 disabled:hover:bg-transparent dark:disabled:bg-primary-50/20 dark:disabled:border-primary-50/10 dark:disabled:text-primary-100/60',
        secondary:
          'hover:bg-secondary-50 border-secondary-500/80 text-secondary-500  focus:ring-secondary-100 dark:text-secondary-200 dark:border-secondary-200 disabled:text-secondary-200 disabled:border-secondary-100 disabled:hover:bg-transparent dark:disabled:bg-secondary-50/20 dark:disabled:border-secondary-50/10 dark:disabled:text-secondary-100/60',
        warning:
          'hover:bg-warning-50 border-warning-500/80 text-warning-500  focus:ring-warning-100 dark:text-warning-200 dark:border-warning-200 disabled:text-warning-200 disabled:border-warning-100 disabled:hover:bg-transparent dark:disabled:bg-warning-50/20 dark:disabled:border-warning-50/10 dark:disabled:text-warning-100/60',
        danger:
          'hover:bg-danger-50 border-danger-500/80 text-danger-500  focus:ring-danger-100 dark:text-danger-200 dark:border-danger-200 disabled:text-danger-200 disabled:border-danger-100 disabled:hover:bg-transparent dark:disabled:bg-danger-50/20 dark:disabled:border-danger-50/10 dark:disabled:text-danger-100/60',
        green:
          'hover:bg-green-50  border-green-500/80 text-green-500  focus:ring-green-100 dark:text-green-200 dark:border-green-200 disabled:text-green-200 disabled:border-green-100 disabled:hover:bg-transparent dark:disabled:bg-green-50/20 dark:disabled:border-green-50/10 dark:disabled:text-green-100/60',
        neutral:
          'hover:bg-neutral-10 border-neutral-100/20 text-neutral-100/60 focus:ring-neutral-10 dark:text-neutral-200 dark:border-neutral-200 disabled:text-neutral-200 disabled:border-neutral-100 disabled:hover:bg-transparent dark:disabled:bg-neutral-50/20 dark:disabled:border-neutral-50/10 dark:disabled:text-neutral-100/60',
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

const OutlinedButton = ({
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

export default OutlinedButton
