import Avatar from '@/components/Common/Avatar'
import { ThreeDotIcon } from '@/components/Common/Icons'
import { PostComment as PostCommentType } from '@/lib/constants/dummy.constants'
import { getTimePassed } from '@/lib/helpers'

type Props = {
  comment: PostCommentType
}

const PostComment = ({ comment }: Props) => {
  return (
    <div className='flex w-full gap-2.5 md:gap-4.5'>
      <div className='mt-1.5 md:mt-4.5'>
        <Avatar
          className='h-6 w-6 max-md:!text-body-3 max-md:font-bold md:h-10 md:w-10'
          fullname={comment.author.fullname}
          avatarUrl={comment.author.avatarUrl}
        />
      </div>
      <div className='grow'>
        <div className='rounded-2xl bg-neutral-0 p-2.5 shadow-default md:p-3.5'>
          <div className='mb-1.5 flex items-center justify-between md:mb-3.5'>
            <div>
              <p className='text-body-1 font-medium'>
                {comment.author.fullname}
              </p>
              <p className='text-body-3 text-neutral-100/60 md:font-medium'>
                {getTimePassed(comment.date)} ago
              </p>
            </div>
            <button>
              <ThreeDotIcon width={16} />
            </button>
          </div>
          <p className='text-body-3 md:text-body-1'>{comment.content}</p>
        </div>
        <div className='mt-2.5 flex items-center pl-2'>
          <button className='py-.5 px-1.5 text-body-4 font-medium hover:text-neutral-500 md:text-body-3'>
            Like
          </button>
          <button className='py-.5 px-1.5 text-body-4 font-medium hover:text-neutral-500 md:text-body-3'>
            Reply
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostComment
