'use client'

import FeedSideContent from '@/components/Home/FeedSideContent'
import WritePost from '@/components/Post/WritePost'

export const Home = () => {
  return (
    <div className='flex gap-[1.875rem]'>
      <div className='basis-full pt-[1.875rem] xl:basis-8/12'>
        <WritePost />
      </div>
      <div className='hidden min-w-fit basis-0 xl:block xl:min-w-[18rem] xl:basis-4/12'>
        <div className='sticky top-[6.75rem]'>
          <FeedSideContent />
        </div>
      </div>
    </div>
  )
}
