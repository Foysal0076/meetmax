'use client'

import { useEffect, useRef, useState } from 'react'

import StoryContactItem from '@/components/Chat/StoryContactItem'
import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@/components/Common/Icons'
import { STORIES } from '@/lib/constants/dummy.constants'
import { useUserInfo } from '@/lib/hooks/useUserInfo'

const scrollLeft = 66

const Stories = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(false)

  const onStoryItemClick = (id: number) => {
    console.log(`StoryContactItem clicked with id ${id}`)
  }

  const onAddStoryClick = (id: number) => {
    console.log(`Add story clicked with user id ${id}`)
  }

  const user = useUserInfo()

  const updateButtonVisibility = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft + clientWidth < scrollWidth)
    }
  }

  const handleNextButtonClick = () => {
    if (containerRef?.current) {
      containerRef?.current.scrollBy({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  const handlePreviousButtonClick = () => {
    if (containerRef.current) {
      containerRef?.current.scrollBy({ left: -scrollLeft, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    updateButtonVisibility()
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', updateButtonVisibility)
      return () => {
        container.removeEventListener('scroll', updateButtonVisibility)
      }
    }
  }, [])

  return (
    <div className='relative'>
      <div
        ref={containerRef}
        className='no-scrollbar flex items-center gap-5 overflow-x-auto'>
        <div className='relative'>
          <StoryContactItem
            key={'logged-in-user'}
            authorId={user?.id as unknown as number}
            avatarUrl={'/assets/images/dummy/avatar-dp.png'}
            fullname={user?.name as unknown as string}
            onClick={onAddStoryClick}
          />
          <div className='absolute left-1/2 top-[3.125rem] flex h-4 w-4 -translate-x-1/2 -translate-y-[.5rem] items-center justify-center rounded-full bg-neutral-0 shadow-md'>
            <AddIcon width={10} className='text-neutral-100' />
          </div>
        </div>
        {STORIES.map((story) => (
          <StoryContactItem
            key={story.id}
            authorId={story.author.id}
            avatarUrl={story.author.avatarUrl}
            fullname={story.author.fullname}
            onClick={onStoryItemClick}
          />
        ))}
      </div>
      {showLeftButton && (
        <button
          onClick={handlePreviousButtonClick}
          className='absolute -left-2 top-[1.0625rem] flex h-4 w-4 items-center justify-center rounded-full bg-neutral-0 shadow-md'>
          <ArrowLeftIcon width={10} />
        </button>
      )}
      {showRightButton && (
        <button
          onClick={handleNextButtonClick}
          className='absolute -right-1 top-[1.0625rem] flex h-4 w-4 items-center justify-center rounded-full bg-neutral-0 shadow-default'>
          <ArrowRightIcon width={10} />
        </button>
      )}
    </div>
  )
}

export default Stories
