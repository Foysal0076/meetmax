import GroupAvatar from '@/components/Common/GroupAvatar'
import { ShortUserInfo } from '@/lib/constants/dummy.constants'

type Props = {
  likes: ShortUserInfo[]
  comments: number
  shares: number
}

const PostInteracts = ({ comments, likes, shares }: Props) => {
  return (
    <div className='flex items-center justify-between'>
      <GroupAvatar avatars={likes} size='sm' />
      <span className='text-body-1 font-medium text-neutral-100/60'>
        {`${comments} Comments`}{' '}
        <span className='ml-4 text-body-1 font-medium text-neutral-100/60'>{`${shares} Share`}</span>{' '}
      </span>
    </div>
  )
}

export default PostInteracts
