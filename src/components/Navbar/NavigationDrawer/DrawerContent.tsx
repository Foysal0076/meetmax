import Link from 'next/link'

export const DrawerContent = () => {
  const year = new Date().getFullYear()
  return (
    <nav
      className='flex h-full flex-col justify-between'
      aria-label='Mobile navigation'>
      <div className='flex grow flex-col justify-between gap-4'>
        <div>{/* Top navigation */}</div>
        <div className='flex flex-col justify-end gap-4 bg-neutral-10/50 px-6 py-4 dark:bg-neutral-900/10'>
          <Link
            href='/about'
            className='text-sm transition-colors duration-300 hover:text-primary-500'>
            About
          </Link>
          <Link
            href='/contact'
            className='mb-4 text-sm transition-colors duration-300 hover:text-primary-500'>
            Contact
          </Link>
          <p className={`flex items-center text-xs`}>
            © {year}. All rights reserved.
          </p>
        </div>
      </div>
    </nav>
  )
}
