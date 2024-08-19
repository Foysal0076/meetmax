'use client'

import FeedSideContent from '@/components/Home/FeedSideContent'
import PostFeed from '@/components/Post/PostFeed'
import WritePost from '@/components/Post/WritePost'

export const Home = () => {
  return (
    <div className='flex gap-7.5'>
      <div className='basis-full py-7.5 @container xl:basis-8/12'>
        <WritePost />
        <div className='mb-2 md:mb-7.5' />
        <PostFeed />
      </div>
      <div className='hidden min-w-fit basis-0 xl:block xl:min-w-[18rem] xl:basis-4/12'>
        <div className='sticky top-[6.75rem]'>
          <FeedSideContent />
        </div>
      </div>
    </div>
  )
}
