import { SendIcon } from '@/components/Common/Icons'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {}
const SendButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={`group rounded-md bg-primary-500/20 outline-none transition-all duration-300 focus:ring-4 focus:ring-primary-200/50 active:scale-[.8] ${className} flex items-center justify-center`}
      {...props}>
      <SendIcon className='text-primary-500' width={16} />
    </button>
  )
}

export default SendButton
