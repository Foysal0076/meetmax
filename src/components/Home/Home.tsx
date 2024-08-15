'use client'

import { SideNavigation } from '@/components/Common/SideNavigation'

export const Home = () => {
  return (
    <div className='flex overflow-x-hidden'>
      {/* side navigation */}
      <div className='-ml-[15rem] w-[15rem] px-3 transition-all duration-300 md:ml-0 lg:min-w-[15rem] lg:px-5'>
        <SideNavigation />
      </div>
      <div className='container h-[100vh] max-w-4xl rounded-tl-2xl rounded-tr-2xl bg-neutral-3 pt-[1.875rem] max-sm:px-0'>
        <div className='flex gap-[1.875rem]'>
          <div className='basis-full bg-slate-500 lg:basis-8/12'>
            Main Content
          </div>
          <div className='hidden basis-0 bg-warning-500 lg:block lg:basis-4/12 xl:min-w-[18rem]'>
            Side contents
          </div>
        </div>
      </div>
      {/* chats */}
      <div className='-mr-[19.375rem] w-[19.375rem] bg-danger-500 transition-all duration-300 md:mr-0'>
        Chats
      </div>
    </div>
  )
}
