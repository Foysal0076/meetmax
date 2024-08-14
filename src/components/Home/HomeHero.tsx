import Spinner from '@/components/Common/Spinner'

export const HomeHero = () => {
  return (
    <div className='container'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div className='basis-1/2'>
          <h1 className='h1'>This is H1</h1>
          <h2 className='h2'>This is H2</h2>
          <h2 className='h3'>This is H3</h2>
          <h2 className='h4'>This is H4</h2>
          <h2 className='h5'>This is H5</h2>
          <h2 className='h6'>This is H6</h2>
          <br />
          <p className='mb-4 max-w-xl'>
            Default: I am a default paragraph Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo nemo mollitia autem non assumenda,
            labore repellendus blanditiis illum iste aut voluptatem amet,
            temporibus aliquid dignissimos sunt eius nihil, magnam sequi.
          </p>
          <span className='mb-4 font-thin'>
            Weight 100: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod laborum, iusto harum omnis consequatur obcaecati blanditiis
            voluptate deleniti unde adipisci?
          </span>
          <span className='mb-4 block max-w-xl font-extralight'>
            Weight 200: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod laborum, iusto harum omnis consequatur obcaecati blanditiis
            voluptate deleniti unde adipisci?
          </span>
          <span className='mb-4 block max-w-xl font-light'>
            Weight 300: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-normal'>
            Weight 400: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-medium'>
            Weight 500: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-semibold'>
            Weight 600: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-bold'>
            Weight 700: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-extrabold'>
            Weight 800: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-black'>
            Weight 900: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <div className='my-8'>
            <Spinner className='text-current' />
          </div>
        </div>
        <div className='basis-1/2'>
          <h2 className='h2 mb-4 mt-8'>Unordered List examples</h2>
          <ul className='list-disc [&>li]:ml-4 md:[&>li]:ml-6'>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              doloremque asperiores vero nesciunt adipisci nobis excepturi
              maxime? Veritatis, facilis quis.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              dolores.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              dolores.
            </li>
          </ul>
          <div className='mt-8' />
          <hr className='border-slate-900/10 dark:border-slate-300/10' />
          <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-0 shadow-default dark:border-slate-300/10'></div>
          <div className='drop-shadow-default bg-surface-100/50 mt-4 h-32 w-32 rounded-lg border dark:border-slate-300/10'></div>
          <div className='flex flex-wrap gap-4 bg-primary-400'>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-50'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-100'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-200'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-300'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-400'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-500'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-600'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-700'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-800'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-primary-900'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-50'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-100'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-200'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-300'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-400'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-500'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-600'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-700'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-800'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-secondary-900'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-50'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-100'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-200'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-300'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-400'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-500'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-600'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-700'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-800'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-warning-900'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-50'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-100'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-200'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-300'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-400'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-500'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-600'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-700'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-800'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-danger-900'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-0'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-10'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-20'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-30'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-40'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-50'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-60'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-70'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-80'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-90'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-95'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-100'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-200'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-300'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-400'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-500'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-600'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-700'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-800'></div>
            <div className='mt-4 h-32 w-32 rounded-lg bg-neutral-900'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
