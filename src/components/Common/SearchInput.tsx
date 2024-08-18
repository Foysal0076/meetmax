import React from 'react'

import { SearchIcon } from '@/components/Common/Icons'

type Props = React.HTMLAttributes<HTMLInputElement> & {}

const SearchInput = ({ className, ...props }: Props) => {
  className = `block w-full rounded-large border-none ring-1 ring-neutral-40 bg-neutral-0 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 text-body-1 text-neutral-100 placeholder:text-neutral-80 ${className}`
  return (
    <div className='w-full'>
      <label htmlFor='search-input' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
          <SearchIcon className='!h-3.5 !w-3.5 text-neutral-100 md:!h-4 md:!w-4' />
        </div>
        <input type='text' id='search-input' className={className} {...props} />
      </div>
    </div>
  )
}

export default SearchInput
