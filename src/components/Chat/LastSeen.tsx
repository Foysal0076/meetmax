import { getLastSeenTime } from '@/lib/helpers'

type Props = {
  lastSeen: Date | 'online' | null
}

const LastSeen = ({ lastSeen }: Props) => {
  if (!lastSeen) return null

  if (lastSeen === 'online') {
    return <div className='h-2 w-2 rounded-full bg-secondary-500' />
  }

  const lasSeenTime = new Date(lastSeen)

  return (
    <span className='text-body-3 font-medium'>
      {getLastSeenTime(lasSeenTime)}
    </span>
  )
}

export default LastSeen
