'use client'

export const Home = () => {
  return (
    <div className='flex gap-[1.875rem]'>
      <div className='basis-full lg:basis-8/12'>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
        <h1 className='text-8xl'>Main Content</h1>
      </div>
      <div className='hidden min-w-fit basis-0 bg-warning-500 lg:block lg:basis-4/12 xl:min-w-[18rem]'>
        <div className='sticky top-[4.875rem] pt-4'>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
          <h1> Side contents</h1>
        </div>
      </div>
    </div>
  )
}
