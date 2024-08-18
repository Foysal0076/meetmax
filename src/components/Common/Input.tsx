import { forwardRef, InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }: Props, ref) => {
    className = `block w-full rounded-large border-none bg-neutral-100/5 p-2.5 text-sm text-gray-900 focus:ring-primary-500 text-body-1 text-neutral-100 placeholder:text-neutral-40 ${className}`
    return (
      <input id='search-input' className={className} {...props} ref={ref} />
    )
  }
)

export default Input
