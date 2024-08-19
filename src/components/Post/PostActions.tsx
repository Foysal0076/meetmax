import CommentButton from '@/components/Common/CommentButton'
import LikeButton from '@/components/Common/LikeButton'
import ShareButton from '@/components/Common/ShareButton'

const PostActions = () => {
  return (
    <div className='flex justify-between border-b border-t py-[.3125rem] md:py-2.5'>
      <LikeButton />
      <CommentButton />
      <ShareButton />
    </div>
  )
}

export default PostActions
