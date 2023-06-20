import React from 'react'
import NavbarMain from '../NavbarMain'
import Detail from '../../organism/ProductDetail'


export default function HomePage() {
  return (
    <>
      <div className="bg-yellow-950 bg-cover flex-full">
        <NavbarMain />
        <div className='flex min-h-fit px-16 pt-1'>
          <div className='flex flex-col w-auto h-auto'>
            <div className='w-[500px]'>
              <Detail title="Discover The Art Of Perfect Coffee">
              </Detail>
            </div >
            <p className='mt-10 text-white text-2xl'>Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right</p>
            <div className='flex flex-row gap-10 mt-10'>
              <div className='flex bg-white w-32 text-center rounded items-center justify-center'>
                <a href="">Order Now ></a>
              </div>
              <div className='flex border text-white border-slate-200 w-32 h-10 text-center items-center justify-center rounded'>
                <a href="">Explore More</a>
              </div>
            </div>
            <div className='flex flex-row mt-16 gap-4'>
              <div className='text-white text-center items-center justify-center'>
                <h1 className='text-3xl font-bold'>50+</h1>
                <p>Item Of Coffee</p>
              </div>
              <div className='text-white text-center items-center justify-center'>
                <h1 className='text-3xl font-bold'>20+</h1>
                <p>Order Running</p>
              </div>
              <div className='text-white text-center items-center justify-center'>
              <h1 className='text-3xl font-bold'>2k+</h1>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
          <div className='ml-10 '>
            <img src="/public/kopi.png" alt="gambar" width={3000} className='rounded-t-lg' />
          </div>
        </div>
      </div>
    </>
  )
}