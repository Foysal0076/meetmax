import BirthdayCard from '@/components/Common/BirthdayCard'
import EventCard from '@/components/Common/EventCard'
import { BIRTHDAYS } from '@/lib/constants/dummy.constants'
import { pluralize } from '@/lib/helpers'

const Birthdays = () => {
  const birthdayCount = BIRTHDAYS.length
  const description =
    birthdayCount > 1
      ? `See ${birthdayCount} ${pluralize(birthdayCount, 'other')} have upcoming ${pluralize(birthdayCount, 'birthday')}`
      : 'No upcoming birthdays'

  return (
    <div className='rounded-2xl bg-neutral-0 pb-3.5 shadow-default lg:pb-[1.125rem]'>
      <div className='flex justify-between border-b px-[1.125rem] py-2.5'>
        <span className='text-display font-bold'>Birthdays</span>
        <button className='text-body-2 text-primary-500 transition-colors duration-200 hover:text-primary-600'>
          See All
        </button>
      </div>
      <div className='px-5 pt-3.5 lg:px-[1.125rem] lg:pt-5'>
        <BirthdayCard
          id={1}
          fullname={'Edilson De Carvalho'}
          avatarUrl={'/assets/images/dummy/avatar-dp.png'}
          dateOfBirth={new Date('2002-09-01')}
        />
        <EventCard
          event={{
            id: 1,
            icon: '/assets/images/dummy/cake-icon.svg',
            title: 'Upcoming Birthdays',
            description,
            seenBy: [],
            participants: [],
            featuredImage: '',
          }}
        />
      </div>
    </div>
  )
}

export default Birthdays
