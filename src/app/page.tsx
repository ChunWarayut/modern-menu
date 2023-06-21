import Image from 'next/image'

export default function SplashScreenPage () {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-200 after:via-amber-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />

      <div className='mb-32 text-center px-10 flex flex-col items-center'>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/assets/images/food_home.svg'
          alt='Modern Food Logo'
          width={400}
          height={400}
          priority
        />
        <article className='col-span-3 mt-5'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
            Modern Food
          </h1>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
            เมนูอาหารแห่งอนาคต
          </h1>
          <p className='mt-4 text-base text-gray-700 dark:text-gray-300'>
            เมนูอาหารแห่งอนาคตที่จะช่วยให้คุณสามารถสร้างเมนูอาหารได้อย่างง่ายดาย
          </p>
        </article>
      </div>

      <div className='fixed sm:bottom-10 lg:bottom-20 xl:bottom-24 bottom-16'>
        <a
          href='#_'
          className='px-20 py-3 relative rounded-3xl group font-medium text-white inline-block'
        >
          <span className='absolute top-0 left-0 w-full h-full rounded-3xl opacity-50 filter blur-sm bg-gradient-to-br from-amber-600 to-yellow-500'></span>
          <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-3xl opacity-50 from-amber-600 to-yellow-500'></span>
          <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-3xl shadow-xl bg-gradient-to-br filter group-active:opacity-0 blur-xl group-focus::blur-xl group-hover:blur-xl from-amber-600 to-yellow-500'></span>
          <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded-3xl bg-gradient-to-br to-amber-600 from-yellow-500'></span>
          <span className='relative'>Continue</span>
        </a>
      </div>
    </main>
  )
}
