'use client'
import Avatar from '@/components/Common/Avatar'
import CommentInput from '@/components/Common/CommentInput'
import { useUserInfo } from '@/lib/hooks/useUserInfo'

const WriteComment = () => {
  const user = useUserInfo()
  return (
    <div className='flex items-center gap-2.5 md:gap-3.5'>
      <div>
        <Avatar
          avatarUrl={user?.image ?? '/assets/images/dummy/avatar-dp.png'}
          fullname={user?.name as unknown as string}
          className='h-[2.125rem] w-[2.125rem] md:h-[2.375rem] md:w-[2.375rem]'
        />
      </div>
      <div className='flex grow gap-2.5'>
        <CommentInput />
      </div>
    </div>
  )
}

export default WriteComment
