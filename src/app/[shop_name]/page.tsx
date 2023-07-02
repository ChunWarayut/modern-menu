'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const catalog = [
  { name: 'salad', image: '/assets/images/salad.svg' },
  { name: 'bakery', image: '/assets/images/bakery.svg' },
  { name: 'milk', image: '/assets/images/milk.svg' },
  { name: 'coffee', image: '/assets/images/coffee.svg' },
  { name: 'tea', image: '/assets/images/tea.svg' },
  { name: 'snack', image: '/assets/images/snack.svg' }
]

const menu = [
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
export default function ShopPage () {
  const { shop_name } = useParams()
  return (
    <>
      <main className='max-w-md mx-auto mb-20'>
        <h1 className='text-4xl text-black pb-5 uppercase'>{shop_name}</h1>
        <h1 className='text-black text-xl'>
          Hello, <span className='text-green-400'>วรายุทธ เทกระโทก</span>
        </h1>
        <h3 className='text-gray-300 text-base'>
          What do you want to eat today?
        </h3>

        <h3 className='text-black font-bold text-base pt-5'>Food Category</h3>
        <div className='flex overflow-x-scroll p-5 pl-0'>
          {catalog.map(e => (
            <div
              key={e.name}
              className='bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 px-5 pt-4 mr-6 items-center flex flex-col'
            >
              <img
                src={e.image}
                alt='Sunset in the mountains'
                width={50}
                height={50}
              />
              <div className='px-5 py-2 bg-white'>
                <div className='font-bold text-sm mb-2 capitalize'>
                  {e.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className='text-black font-bold text-base'>Food For You</h3>
        <div className='flex overflow-x-scroll p-5 pl-0'>
          {menu.map(e => (
            <Link
              key={e.name}
              href={`/me/product/${e.code}`}
              className='h-auto pb-16 min-w-[230px]'
            >
              <div className='relative w-[220px] h-[180px]'>
                <Image
                  src={e.image}
                  fill
                  className='z-0 overflow-hidden rounded-xl object-cover'
                  alt={e.name}
                />
                <div className='bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 flex flex-col z-10 absolute -bottom-16 w-[200px] ml-[10px]'>
                  <div className='px-4 py-4 bg-white'>
                    <div className='font-bold text-sm capitalize'>{e.name}</div>
                    <div className='font-bold text-sm capitalize text-yellow-500'>
                      ฿ {e.price}
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
            </Link>
          ))}
        </div>

        <h3 className='text-black font-bold text-base pt-5 pb-2'>
          Most Popular
        </h3>
        <div className='grid grid-cols-2 gap-2'>
          {menu.map(e => (
            <Link key={e.name} href={`/me/product/${e.code}`}>
              <div className='relative w-full h-[150px]'>
                <Image
                  fill
                  src={e.image}
                  className='z-0 overflow-hidden rounded-tl-xl rounded-tr-xl shadow-lg object-cover'
                  alt={e.name}
                />
              </div>
              <div className='bg-white rounded-bl-xl rounded-br-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col'>
                <div className='px-4 py-4 bg-white'>
                  <div className='font-bold text-sm capitalize'>{e.name}</div>
                  <div className='font-bold text-sm capitalize text-yellow-500'>
                    ฿ {e.price}
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
            </Link>
          ))}
        </div>
      </main>
      <div className='bg-white rounded-t-3xl shadow-2xl shadow-slate-500 filter drop-shadow-3xl border border-slate-200 border-b-0 h-20 fixed w-full z-10 bottom-0 flex flex-row justify-around items-center text-orange-500 font-extralight text-sm'>
        <Link href={``} className='flex flex-col items-center'>
          <Image
            src={'/assets/images/home.svg'}
            alt='Sunset in the mountains'
            width={30}
            height={30}
          />
          HOME
        </Link>
        <Link href={``} className='flex flex-col items-center'>
          <Image
            src={'/assets/images/discount.svg'}
            alt='Sunset in the mountains'
            width={30}
            height={30}
          />
          OFFERS
        </Link>
        <Link href={``} className='flex flex-col items-center'>
          <Image
            src={'/assets/images/bag.svg'}
            alt='Sunset in the mountains'
            width={30}
            height={30}
          />
          ORDER
        </Link>
        <Link href={``} className='flex flex-col items-center'>
          <Image
            src={'/assets/images/profile.svg'}
            alt='Sunset in the mountains'
            width={30}
            height={30}
          />
          PROFILE
        </Link>
      </div>
    </>
  )
}
