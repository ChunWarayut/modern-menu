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
    price: 60,
    name: 'ข้าวมันไก่',
    image: '/assets/images/man-kai.webp'
  },
  {
    code: 'ME003',
    price: 40,
    name: 'ข้าวขาหมู',
    image: '/assets/images/pig-leg-stew.jpg'
  },
  {
    code: 'ME004',
    price: 70,
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
type MoreItems = {
  code: string
  name: string
  image: string
  price: number
}
export default function CartPage () {
  return (
    <>
      <main className='mb-24 max-w-md mx-auto p-3'>
        <div className='text-sm text-gray-500/50'>รายการ</div>
        <div className='text-lg font-bold mb-3'>อาหารของคุณ</div>

        {menu.map((item, index) => {
          const price =
            item.price + topping.reduce((acc, item) => acc + item.price, 0)
          return (
            <div
              key={index}
              className='mt-2 bg-white rounded-bl-xl rounded-tl-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-row'
            >
              <img src={item.image} alt={item.name} width='100' height='100' />
              <div className='pl-2 py-2 w-full font-bold text-sm capitalize '>
                <div>
                  {item.name} ฿ {price}
                </div>
                <div className='flex flex-wrap'>
                  {topping.map((item, index) => (
                    <div key={item.code} className='text-xs text-gray-500/50'>
                      {item.name} + {item.price}
                      {index < topping.length - 1 && ','} &nbsp;
                    </div>
                  ))}
                </div>
              </div>
              <div className='p-2 w-fit whitespace-nowrap font-bold text-xl capitalize drop-shadow-2xl shadow-white cursor-pointer'>
                <img
                  src={`/assets/images/delete.svg`}
                  alt={'delete'}
                  width='36'
                  height='36'
                />
              </div>
            </div>
          )
        })}
      </main>
      <div className='bg-white rounded-t-3xl shadow-2xl shadow-slate-500 filter drop-shadow-3xl border border-slate-200 border-b-0 h-20 fixed w-full z-20 bottom-0 flex flex-row justify-around items-center text-orange-500 font-extralight text-sm drop-shadow-2xl drop-shadow-orange-500/50'>
        <Link href={`/me`} className='flex flex-col items-center'>
          <button
            type='button'
            className='text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            สั่งอาหาร
          </button>
        </Link>
      </div>
    </>
  )
}
