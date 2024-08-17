import LastSeen from '@/components/Chat/LastSeen'
import Avatar from '@/components/Common/Avatar'

type Props = {
  id: number
  fullname: string
  avatarUrl?: string
  lastSeen: Date | 'online' | null
}

const FriendListItem = ({ avatarUrl, fullname, id, lastSeen }: Props) => {
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-5'>
        <Avatar
          className='rounded-full'
          fullname={fullname}
          avatarUrl={avatarUrl}
        />
        <span className='line-clamp-1 text-display font-medium'>
          {fullname}
        </span>
      </div>
      <LastSeen lastSeen={lastSeen} />
    </div>
  )
}

export default FriendListItem
