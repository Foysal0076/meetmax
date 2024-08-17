'use client'
import Avatar from '@/components/Common/Avatar'

type Props = {
  authorId: number
  fullname: string
  avatarUrl?: string
  onClick: (id: number) => void
}

const StoryContactItem = ({
  onClick,
  authorId,
  avatarUrl,
  fullname,
}: Props) => {
  const _onClick = () => {
    onClick(authorId)
  }

  return (
    <button
      onClick={_onClick}
      className='flex w-[3.125rem] flex-col items-center justify-center gap-2.5'>
      <Avatar
        className='h-[3.125rem] w-[3.125rem] rounded-full border-2 border-primary-500'
        fullname={fullname}
        avatarUrl={avatarUrl}
      />
      <span className='line-clamp-2 text-center text-body-2 font-medium'>
        {fullname}
      </span>
    </button>
  )
}

export default StoryContactItem
