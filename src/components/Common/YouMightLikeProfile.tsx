import AvatarWithDetails from '@/components/Common/AvatarWithDetails'
import Button from '@/components/Common/Button'
import OutlinedButton from '@/components/Common/OutlinedButton'
import { USERS } from '@/lib/constants/dummy.constants'

const YouMightLikeProfile = () => {
  const user = USERS[1]
  if (!user?.userProfile) return null

  return (
    <div className='rounded-2xl bg-neutral-0 shadow-default'>
      <div className='flex justify-between border-b px-4.5 py-2.5'>
        <span className='text-display font-bold'>You Might Like</span>
        <button className='text-body-2 text-primary-500 transition-colors duration-200 hover:text-primary-600'>
          See All
        </button>
      </div>
      <div className='px-4.5 pb-6 pt-5'>
        <AvatarWithDetails
          fullname={user.fullname}
          id={user.id}
          jobTitle={user.userProfile.jobTitle}
          company={user.userProfile.company}
          avatarUrl={user.userProfile?.avatarUrl}
          socials={user.userProfile?.socials}
        />
      </div>
      <div className='flex items-center justify-between gap-5 px-4.5 pb-4.5'>
        <OutlinedButton color='neutral' className='w-full'>
          Ignore
        </OutlinedButton>
        <Button color='primary' className='w-full'>
          Follow
        </Button>
      </div>
    </div>
  )
}

export default YouMightLikeProfile
