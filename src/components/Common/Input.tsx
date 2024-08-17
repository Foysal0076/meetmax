import { forwardRef, InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }: Props, ref) => {
    className = `block w-full rounded-large border-none outline-none bg-neutral-5 p-2.5 text-sm text-gray-900 focus:border-primary-500/20 focus:ring-primary-400 text-body-1 text-neutral-100 placeholder:text-neutral-40 ${className}`
    return (
      <input id='search-input' className={className} {...props} ref={ref} />
    )
  }
)

export default Input
