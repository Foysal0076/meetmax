import RecentEvents from '@/components/Common/RecentEvents'
import YouMightLikeProfile from '@/components/Common/YouMightLikeProfile'

const FeedSideContent = () => {
  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <YouMightLikeProfile />
      <RecentEvents />
    </div>
  )
}

export default FeedSideContent
