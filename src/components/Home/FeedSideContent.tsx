import Birthdays from '@/components/Birthdays'
import RecentEvents from '@/components/Common/RecentEvents'
import YouMightLikeProfile from '@/components/Common/YouMightLikeProfile'

const FeedSideContent = () => {
  return (
    <div className='no-scrollbar flex max-h-[calc(100vh-6.75rem)] flex-col gap-[1.875rem] overflow-y-auto pb-8'>
      <YouMightLikeProfile />
      <RecentEvents />
      <Birthdays />
    </div>
  )
}

export default FeedSideContent
