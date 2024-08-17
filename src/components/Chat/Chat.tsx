import Friends from '@/components/Chat/Friends'
import Stories from '@/components/Chat/Stories'
import SearchInput from '@/components/Common/SearchInput'

export const Chat = () => {
  return (
    <div className='no-scrollbar flex max-h-[calc(100vh-4.875rem)] flex-col gap-[1.875rem] overflow-y-auto bg-neutral-0 px-5 pb-5'>
      <SearchInput
        className='mt-[1px] h-8 text-body-1 text-neutral-100 placeholder:text-neutral-80 md:h-[2.625rem]'
        placeholder='Search friends!'
      />
      <Stories />
      <Friends />
    </div>
  )
}
