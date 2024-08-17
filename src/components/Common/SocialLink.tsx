import { Icon } from '@/components/Common/Icons'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  url: string
  icon: string
}

const SocialLink = ({ url, icon }: Props) => {
  return (
    <a
      href={url}
      target='_blank'
      className='transition-colors duration-200 hover:text-primary-500'>
      <Icon className='h-3.5 w-3.5' name={icon} />
    </a>
  )
}

export default SocialLink
