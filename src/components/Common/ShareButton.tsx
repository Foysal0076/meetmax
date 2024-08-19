import {
  ShareIcon,
} from '@/components/Common/Icons'

type Props = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {}

const ShareButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={`flex items-center gap-1.5 text-body-1 font-medium md:gap-2.5 md:text-body-3 ${className}`}
      {...props}>
      <ShareIcon />
      <span>Share</span>
    </button>
  )
}

export default ShareButton
