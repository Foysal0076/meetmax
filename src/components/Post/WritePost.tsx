'use client'

import Avatar from '@/components/Common/Avatar'
import Button from '@/components/Common/Button'
import Input from '@/components/Common/Input'
import AddFeeling from '@/components/Post/AddFeeling'
import LiveVideo from '@/components/Post/LiveVideo'
import UploadMedia from '@/components/Post/UploadMedia'
import { useUserInfo } from '@/lib/hooks/useUserInfo'

const WritePost = () => {
  const user = useUserInfo()
  if (!user) return null

  return (
    <div className='rounded-2xl p-5 shadow-default lg:p-4.5'>
      <div className='mb-4.5 flex items-center gap-3.5 md:mb-7'>
        <div>
          <Avatar
            avatarUrl={user.image ?? '/assets/images/dummy/avatar-dp.png'}
            fullname={user?.name as unknown as string}
            className='h-8 w-8 sm:h-[2.625rem] sm:w-[2.625rem]'
          />
        </div>
        <Input placeholder="What's happening" className='' />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-6 md:gap-7.5'>
          <LiveVideo />
          <UploadMedia />
          <AddFeeling />
        </div>
        <Button>Post</Button>
      </div>
    </div>
  )
}

export default WritePost
