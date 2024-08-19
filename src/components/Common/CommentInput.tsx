import { GifIcon, PictureIcon, SmileIcon } from '@/components/Common/Icons'
import Input from '@/components/Common/Input'
import SendButton from '@/components/Common/SendButton'

const CommentInput = () => {
  return (
    <div className='5 flex grow gap-2'>
      <div className='relative w-full'>
        <Input
          className='h-[2.125rem] min-w-full pr-[6rem] md:h-[2.375rem]'
          placeholder='Write a comment...'
        />
        <div className='absolute bottom-0 right-4 top-0 flex w-auto items-center gap-3.5'>
          <button>
            <GifIcon />
          </button>
          <button>
            <PictureIcon />
          </button>
          <button>
            <SmileIcon />
          </button>
        </div>
      </div>
      <SendButton className='min-w-[2.125rem] @md:min-w-[2.375rem]' />
    </div>
  )
}

export default CommentInput
