'use client'

import { useMemo, useState } from 'react'

import PostComment from '@/components/Post/PostComment'
import { PostComment as PostCommentType } from '@/lib/constants/dummy.constants'
import { pluralize } from '@/lib/helpers'

type Props = {
  comments: PostCommentType[]
}

const PostComments = ({ comments }: Props) => {
  const [showCommentCount, setShowCommentCount] = useState(1)

  const handleShowMoreComments = () => {
    setShowCommentCount(showCommentCount + 5)
  }

  const totalComments = useMemo(() => comments.length, [comments])
  const remainingComments = useMemo(
    () => totalComments - showCommentCount,
    [totalComments, showCommentCount]
  )
  console.log({ totalComments, remainingComments })
  return (
    <div>
      <div className='flex w-full flex-col gap-2 max-md:px-5 md:gap-4.5'>
        {comments.slice(0, showCommentCount).map((comment, index) => (
          <div key={comment.id} className='flex flex-col gap-3.5 md:gap-4.5'>
            <PostComment comment={comment} />
            {comment.replies.length > 0 && (
              <div className='ml-[2.375rem] md:ml-[3.625rem]'>
                {comment.replies.map((reply) => (
                  <PostComment key={reply.id} comment={reply} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {remainingComments > 0 && (
        <button
          onClick={handleShowMoreComments}
          className='mt-1 select-none text-neutral-100/60 hover:text-neutral-100 md:mt-4.5'>
          {`View ${remainingComments} more ${pluralize(remainingComments, 'comment')}`}
        </button>
      )}
    </div>
  )
}

export default PostComments
