import Link from 'next/link'

import NavbarAuthMenu from '@/components/Auth/NavbarAuthMenu'
import CompanyLogo from '@/components/Common/CompanyLogo'
import SearchInput from '@/components/Common/SearchInput'
import NavbarMessageMenu from '@/components/Navbar/NavbarMessageMenu'

export const Navbar = () => {
  return (
    <header
      className='fixed top-0 z-40 flex h-[3.75rem] w-full items-center bg-neutral-0 backdrop-blur-3xl dark:bg-neutral-800/80 md:h-[4.5rem]'
      aria-label='Main navigation'>
      <nav
        className='flex w-full items-center gap-5 px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='order-3 hidden md:order-1 md:block'>
          <Link href='/' className='h5 font-extrabold text-primary-400'>
            <CompanyLogo />
          </Link>
        </div>
        <div className='order-2 flex grow justify-center md:justify-start'>
          <div className='container max-w-4xl px-0'>
            <div className='w-full md:w-[20.875rem] lg:w-[34rem]'>
              <SearchInput
                className='h-8 text-body-1 text-neutral-100 placeholder:text-neutral-80 md:h-[2.625rem]'
                placeholder='Search for something here...'
              />
            </div>
          </div>
        </div>
        <div className='order-3 md:hidden'>
          <NavbarMessageMenu />
        </div>
        <div className='order-1 flex gap-4 md:order-3'>
          <NavbarAuthMenu />
          {/* <div className='flex md:hidden'>
            <NavigationDrawerMenu />
          </div> */}
        </div>
      </nav>
    </header>
  )
}
