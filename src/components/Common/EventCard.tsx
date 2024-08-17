import Image from 'next/image'

import GroupAvatar from '@/components/Common/GroupAvatar'
import { Event } from '@/lib/constants/dummy.constants'

type Props = {
  event: Event
}

const EventCard = ({ event }: Props) => {
  return (
    <div className='rounded-large bg-neutral-3 px-3.5 pb-3.5 lg:px-2.5 lg:pb-2.5'>
      <div className='flex gap-5'>
        <Image
          src={event.icon}
          height={40}
          width={40}
          className='object-contain'
          alt='icon'
        />
        <div className='flex flex-col'>
          <span className='line-clamp-1 text-display font-medium'>
            {event.title}
          </span>
          <span className='line-clamp-2 text-body-3 font-medium text-neutral-100/60'>
            {event.description}
          </span>
        </div>
      </div>
      <hr className='my-2.5' />
      <div className='flex items-center justify-between gap-5'>
        <span className='text-body-3 font-medium'>
          {event.seenBy.length} seen
        </span>
        <GroupAvatar avatars={event.participants} size='sm' />
      </div>
    </div>
  )
}

export default EventCard
