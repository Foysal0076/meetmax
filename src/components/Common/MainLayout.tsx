import { Chat } from '@/components/Chat'
import { SideNavigation } from '@/components/Common/SideNavigation'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex grow max-md:overflow-x-hidden'>
      <div className='invisible w-0 opacity-0 transition-all duration-300 md:visible md:w-[15rem] md:px-3 md:opacity-100 lg:min-w-[15rem] lg:px-5'>
        <div className='sticky top-[4.875rem] w-full pt-2.5'>
          <SideNavigation />
        </div>
      </div>
      <div className='container max-w-4xl rounded-tl-2xl rounded-tr-2xl bg-neutral-3 max-md:overflow-hidden max-sm:px-0'>
        {children}
      </div>
      <div className='invisible w-0 opacity-0 shadow-default transition-all duration-300 md:visible md:w-[15rem] md:opacity-100 lg:w-[19.375rem]'>
        <div className='sticky top-[4.875rem] w-full'>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
