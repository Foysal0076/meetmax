import FriendListItem from '@/components/Chat/FriendListItem'
import { ThreeDotIcon } from '@/components/Common/Icons'
import { USERS } from '@/lib/constants/dummy.constants'

const Friends = () => {
  return (
    <div className=''>
      <div className='mb-5 flex justify-between'>
        <span className='text-display font-bold'>Friends</span>
        <button>
          <ThreeDotIcon width={16} />
        </button>
      </div>
      <div className='flex flex-col gap-[1.125rem] overflow-auto'>
        {USERS.map((user) => (
          <FriendListItem
            key={user.id}
            id={user.id}
            avatarUrl={user.userProfile?.avatarUrl}
            fullname={user.fullname}
            lastSeen={user.lastSeen}
          />
        ))}
      </div>
    </div>
  )
}

export default Friends
