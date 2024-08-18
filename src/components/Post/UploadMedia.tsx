import { PictureIcon } from '@/components/Common/Icons'

const UploadMedia = () => {
  return (
    <div className='flex items-center gap-2 md:gap-2.5'>
      <PictureIcon />
      <span className='text-body-1 font-medium'>
        Photo <span className='hidden sm:inline'>/Video</span>
      </span>
    </div>
  )
}

export default UploadMedia
