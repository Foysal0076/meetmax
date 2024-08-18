import { VideoCameraIcon } from '@/components/Common/Icons'

const LiveVideo = () => {
  return (
    <div className='flex items-center gap-2 md:gap-2.5'>
      <VideoCameraIcon width={16} />
      <span className='text-body-1 font-medium'>
        Live <span className='hidden sm:inline'>Video</span>
      </span>
    </div>
  )
}

export default LiveVideo
