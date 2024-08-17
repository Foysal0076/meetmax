import Avatar from '@/components/Common/Avatar'
import Input from '@/components/Common/Input'
import SendButton from '@/components/Common/SendButton'

type Props = {
  id: number
  fullname: string
  avatarUrl?: string
  title?: string
  dateOfBirth: string | Date
}

const BirthdayCard = ({
  avatarUrl,
  fullname,
  id,
  title = 'Birthday today',
  dateOfBirth,
}: Props) => {
  return (
    <div className='pb-3.5 lg:pb-[1.125rem]'>
      <div className='mb-3.5 flex items-center gap-5 lg:mb-2.5'>
        <Avatar
          className='h-10 w-10 rounded-md'
          fullname={fullname}
          avatarUrl={avatarUrl}
        />
        <div className='flex flex-col'>
          <span className='line-clamp-1 text-display font-medium'>
            {fullname}
          </span>
          <span className='line-clamp-1 text-body-3 font-medium text-neutral-100/60'>
            {title}
          </span>
        </div>
      </div>
      <div className='flex items-center gap-2.5'>
        <Input
          className='h-[2.125rem] lg:h-[1.875rem]'
          type='text'
          placeholder='Write on his inbox'
        />
        <SendButton className='aspect-square h-[2.125rem] lg:h-[1.875rem]' />
      </div>
    </div>
  )
}

export default BirthdayCard
