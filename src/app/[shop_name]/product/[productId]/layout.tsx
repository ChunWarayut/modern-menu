'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProductLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const { shop_name } = useParams()

  return (
    <>
      <div className='max-w-md mx-auto relative'> 
        <Link
          href={`/` + shop_name}
          className=' absolute z-50 top-0 left-0 bg-white p-2'
        >
          {' '}
          <img
            src='/assets/images/back-square.svg'
            width={24}
            height={24}
            alt='Back'
          />{' '}
        </Link>
        <Link
          href={`/` + shop_name + `/cart`}
          className=' absolute z-50 top-0 right-0 bg-white p-2'
        >
          {' '}
          <img
            src='/assets/images/bag.svg'
            width={24}
            height={24}
            alt='Back'
          />{' '}
        </Link>
      </div>
      <div className=''>{children}</div>
    </>
  )
}
