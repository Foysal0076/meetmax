import clsx from 'clsx'
import Image from 'next/image'

import AvatarWithDetails from '@/components/Common/AvatarWithDetails'
import PostActions from '@/components/Post/PostActions'
import PostComments from '@/components/Post/PostComments'
import PostInteracts from '@/components/Post/PostInteracts'
import WriteComment from '@/components/Post/WriteComment'
import {
  LIKES,
  Post as PostType,
  ShortUserInfo,
} from '@/lib/constants/dummy.constants'
import { getTimePassed } from '@/lib/helpers'

type Props = { post: PostType & { userProfile: ShortUserInfo } }

const Post = ({ post }: Props) => {
  const mediaCount = post.images.length
  const postDescription = post.publishedAt
    ? getTimePassed(post.publishedAt) + '. ' + post.privacy
    : post.privacy

  return (
    <div className='flex flex-col gap-2.5 md:gap-5'>
      <div className='rounded-2xl bg-neutral-0 px-5 py-2.5 shadow-default @md:px-4.5 @md:py-4.5'>
        <AvatarWithDetails
          id={post.userProfile.id}
          fullname={post.userProfile.fullname}
          avatarUrl={post.userProfile.avatarUrl}
          description={postDescription}
        />
        {post?.content && (
          <div className='my-4.5'>
            <p
              className={clsx('line-clamp-3 text-neutral-100', {
                'text-display @md:text-lg': mediaCount === 0,
                'text-body-2': mediaCount > 0,
              })}>
              {post.content}
            </p>
          </div>
        )}
        {mediaCount > 0 && (
          <div className='my-4.5'>
            <div
              className={`grid h-[12rem] grid-cols-2 grid-rows-2 gap-4 @md:h-[17rem]`}>
              {post.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className={clsx('relative gap-4', {
                    'row-span-2': index === 0,
                    'col-span-2 row-span-2': index === 0 && mediaCount === 1,
                    'col-span-1 row-span-2': mediaCount % 2 === 0,
                  })}>
                  <Image
                    src={image}
                    alt={''}
                    className='h-auto max-h-[17rem] w-full rounded-2xl object-cover'
                    fill
                    sizes='40rem'
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className='my-3 md:my-4.5'>
          <PostInteracts
            likes={LIKES}
            comments={post.comments.length}
            shares={17}
          />
        </div>
        <PostActions />
        <div className='mt-3 @md:mt-3.5'>
          <WriteComment />
        </div>
      </div>
      {post.comments.length > 0 && <PostComments comments={post.comments} />}
    </div>
  )
}

export default Post
