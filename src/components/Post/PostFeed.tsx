import Post from '@/components/Post/Post'
import { POSTS } from '@/lib/constants/dummy.constants'

const PostFeed = () => {
  return (
    <div className='flex flex-col gap-2 @md:gap-7.5'>
      {POSTS.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostFeed
