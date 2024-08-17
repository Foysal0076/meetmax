import Avatar from '@/components/Common/Avatar'
import SocialLink from '@/components/Common/SocialLink'
import { Social } from '@/lib/constants/dummy.constants'

type Props = {
  id: number
  fullname: string
  avatarUrl?: string
  jobTitle?: string
  company: string
  socials?: Social[]
}

const AvatarWithDetails = ({
  avatarUrl,
  fullname,
  id,
  company,
  jobTitle,
  socials = [],
}: Props) => {
  const title = jobTitle ? `${jobTitle} at ${company}` : company

  return (
    <div className='flex flex-col gap-[1.125rem]'>
      <div className='flex items-center gap-5'>
        <Avatar
          className='rounded-full'
          fullname={fullname}
          avatarUrl={avatarUrl}
        />
        <div className='flex flex-col'>
          <span className='line-clamp-1 text-display font-medium'>
            {fullname}
          </span>
          <span className='line-clamp-1 text-body-3 font-medium text-neutral-100/60'>
            {title}
          </span>
        </div>
      </div>
      {socials.length > 0 && (
        <div className='ml-[4.375rem] flex items-center gap-4'>
          {socials.map((social) => (
            <SocialLink key={social.icon} url={social.url} icon={social.icon} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AvatarWithDetails
