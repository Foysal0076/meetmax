import Image from 'next/image'

const NotFoundPage = () => {
  return (
    <div className='flex h-[80vh] w-full items-center justify-center'>
      <Image
        src='/assets/images/404.jpg'
        alt='404'
        width={600}
        height={600}
        className='object-contain'
      />
    </div>
  )
}

export default NotFoundPage
