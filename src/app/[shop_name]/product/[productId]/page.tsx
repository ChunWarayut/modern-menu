'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

type MENU = {
  code: string
  price: number
  name: string
  image: string
}

const menu: MENU[] = [
  {
    code: 'ME001',
    price: 50,
    name: 'ก๋วยเตี๋ยวเรือ',
    image: '/assets/images/ptia-hero.webp'
  },
  {
    code: 'ME002',
    price: 50,
    name: 'ข้าวมันไก่',
    image: '/assets/images/man-kai.webp'
  },
  {
    code: 'ME003',
    price: 50,
    name: 'ข้าวขาหมู',
    image: '/assets/images/pig-leg-stew.jpg'
  },
  {
    code: 'ME004',
    price: 50,
    name: 'ข้าวคลุกกะปิ หมูหวาน',
    image: '/assets/images/kokapi.png'
  }
]

const topping = [
  {
    code: 'TP001',
    price: 10,
    name: 'ไข่ดาว',
    image: '/assets/images/kai-dow.jpg'
  },
  {
    code: 'TP002',
    price: 10,
    name: 'ไข่เจียว',
    image: '/assets/images/kai-jew.jpeg'
  },
  {
    code: 'TP003',
    price: 10,
    name: 'ไข่ต้ม',
    image: '/assets/images/kai-tom.png'
  },
  {
    code: 'TP004',
    price: 10,
    name: 'ไข่ยู่ยี่',
    image: '/assets/images/kai-youyee.jpeg'
  }
]
type PROPS = {
  productId: string
}
type MoreItems = {
  code: string
  name: string
  image: string
  price: number
}
export default function ShopPage () {
  const { productId } = useParams() as PROPS

  const [quantity, setQuantity] = useState(1)
  const [moreItems, setMoreItems] = useState<MoreItems[]>([])

  const addQuantity = () => {
    setQuantity(quantity => quantity + 1)
  }

  const minusQuantity = () => {
    setQuantity(quantity => (quantity > 1 ? quantity - 1 : 1))
  }

  const productPrice = menu?.find(e => e?.code === productId)?.price || 0
  const moreItemsPrice = moreItems.reduce((a, b) => a + (b.price || 0), 0)

  const price = (productPrice + moreItemsPrice) * quantity

  return (
    <>
      <main className='mb-24 max-w-md mx-auto'>
        <div className='h-auto pb-5 w-full'>
          <div className='relative h-96 bg-white'>
            <Image
              src={
                menu?.find(e => e?.code === productId)?.image ||
                '/assets/images/ptia-hero.webp'
              }
              fill
              className='z-0 overflow-hidden object-cover shadow-lg rounded-b-3xl bg-white'
              alt={menu?.find(e => e?.code === productId)?.name || 'default'}
            />
          </div>
          <div className='bg-white rounded-b-3xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col z-10 '>
            <div className='px-4 py-4 bg-white'>
              <div className='font-bold text-sm capitalize'>
                {menu?.find(e => e?.code === productId)?.name}
              </div>
              <div className='font-bold text-sm capitalize text-yellow-500'>
                ฿ {menu?.find(e => e?.code === productId)?.price}
              </div>
              <div className='font-bold text-sm capitalize flex'>
                <img
                  src={'/assets/images/star.svg'}
                  alt='Sunset in the mountains'
                  width={16}
                  height={16}
                />
                <img
                  src={'/assets/images/star.svg'}
                  alt='Sunset in the mountains'
                  width={16}
                  height={16}
                />
                <img
                  src={'/assets/images/star.svg'}
                  alt='Sunset in the mountains'
                  width={16}
                  height={16}
                />
                <img
                  src={'/assets/images/star.svg'}
                  alt='Sunset in the mountains'
                  width={16}
                  height={16}
                />
                <img
                  src={'/assets/images/star.svg'}
                  alt='Sunset in the mountains'
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='font-bold px-3'>Add more item</div>
        <div className='grid grid-cols-2 gap-2 pb-5'>
          {topping.map(e => (
            <div
              className={`${
                moreItems.find(item => item.code === e.code) !== undefined
                  ? 'bg-yellow-200/50'
                  : 'bg-white'
              } rounded-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col`}
              key={e.name}
              onClick={() =>
                setMoreItems(moreItems => {
                  if (
                    moreItems.find(item => item.code === e.code) !== undefined
                  ) {
                    return moreItems.filter(item => item.code !== e.code)
                  }
                  return [...moreItems, e]
                })
              }
            >
              <div className='relative w-full h-[150px]'>
                <Image
                  fill
                  src={e.image}
                  className='z-0 overflow-hidden rounded-tl-xl rounded-tr-xl shadow-lg object-cover'
                  alt={e.name}
                />
              </div>
              <div className=' rounded-bl-xl rounded-br-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col'>
                <div className='px-4 py-4 '>
                  <div className='font-bold text-sm capitalize'>{e.name}</div>
                  <div className='font-bold text-sm capitalize text-yellow-500 drop-shadow-2xl shadow-white'>
                    ฿ {e.price}
                  </div>
                  <div className='font-bold text-sm capitalize flex drop-shadow-2xl shadow-2xl shadow-white'>
                    <img
                      src={'/assets/images/star.svg'}
                      alt='Sunset in the mountains'
                      width={16}
                      height={16}
                    />
                    <img
                      src={'/assets/images/star.svg'}
                      alt='Sunset in the mountains'
                      width={16}
                      height={16}
                    />
                    <img
                      src={'/assets/images/star.svg'}
                      alt='Sunset in the mountains'
                      width={16}
                      height={16}
                    />
                    <img
                      src={'/assets/images/star.svg'}
                      alt='Sunset in the mountains'
                      width={16}
                      height={16}
                    />
                    <img
                      src={'/assets/images/star.svg'}
                      alt='Sunset in the mountains'
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='font-bold px-3'>Add more comment</div>
        <div className='px-4 py-2 bg-white rounded-t-lg'>
          <label htmlFor='comment' className='sr-only'>
            Your comment
          </label>
          <textarea
            id='comment'
            rows={4}
            className='w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0  focus:ring-offset-0 focus:ring-offset-white focus:outline-none focus:placeholder-gray-400 focus:ring-opacity-50'
            placeholder='Write a comment...'
            required
          ></textarea>
        </div>
        <div className='flex justify-center pt-5 py-4 relative'>
          <div
            onClick={minusQuantity}
            className='bg-gray-400 text-white px-5 py-3 rounded-full z-10 mr-16'
          >
            -
          </div>
          <div className='bg-white py-4 rounded-full absolute w-60 text-center -mt-1'>
            {quantity}
          </div>
          <div
            onClick={addQuantity}
            className='bg-orange-400 text-white px-5 py-3 rounded-full z-10 ml-16'
          >
            +
          </div>
        </div>
      </main>
      <div className='bg-white rounded-t-3xl shadow-2xl shadow-slate-500 filter drop-shadow-3xl border border-slate-200 border-b-0 h-20 fixed w-full z-20 bottom-0 flex flex-row justify-around items-center text-orange-500 font-extralight text-sm drop-shadow-2xl drop-shadow-orange-500/50'>
        <div className='flex flex-col '>
          <div className='text-xl font-bold drop-shadow-2xl drop-shadow-orange-500/50'>
            $ {price}
          </div>
          <div className='drop-shadow-2xl drop-shadow-orange-500/50'>
            PAYABLE
          </div>
        </div>
        <Link href={`/me/cart`} className='flex flex-col items-center'>
          <button
            type='button'
            className='text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            Add to cart
          </button>
        </Link>
      </div>
    </>
  )
}
