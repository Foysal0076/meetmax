import EventCard from '@/components/Common/EventCard'
import { ThreeDotIcon } from '@/components/Common/Icons'
import { EVENTS } from '@/lib/constants/dummy.constants'

const RecentEvents = () => {
  return (
    <div className='rounded-2xl bg-neutral-0 shadow-default'>
      <div className='flex justify-between border-b px-5 py-2.5 lg:px-[1.125rem]'>
        <span className='text-display font-bold'>Recent Event</span>
        <button className='transition-colors duration-200 hover:text-neutral-500'>
          <ThreeDotIcon />
        </button>
      </div>
      <div className='flex flex-col gap-[1.125rem] px-5 py-3.5 lg:px-[1.125rem] lg:pb-[1.125rem] lg:pt-5'>
        {EVENTS.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default RecentEvents
