import React from 'react'
import Detail from '../../organism/ProductDetail'


export default function NavbarFooter() {
  return (
    <>
      <div className="bg-yellow-950 bg-cover flex-full">
        <div className='flex flex-col'>
          <div className='flex min-h-fit px-16 pt-1 '>
            <div className='flex flex-col w-auto h-auto border border-orange-200'>
              <img src="/public/a.png" alt="gambar" width={400} className='rounded-t-lg' />
              <p className='text-white text-3xl w-96 mb-10 ml-5 text-left justify-center items-center'>Enjoy Better And Better Quality Coffee With Cafeine.</p>
            </div>
            <div className='px-16 pt-10 border border-orange-200'>
              <h1 className='text-white text-3xl pb-4'>Contact Us</h1>
              <h2 className='text-white text-2xl pb-1'>CoffeeTime@gmail.com</h2>
              <h2 className='text-white text-2xl pb-1'>Call Us : <span className='text-orange-200'> (321)562-57420</span></h2>
              <h2 className='text-white text-2xl pb-3'>Text Us : <span className='text-orange-200'> (321)562-57420</span></h2>
              <h2 className='text-orange-200 text-2xl'>39 Brooklyn Street Cibaduyut Country</h2>
            </div>
            <div className='px-5 pt-5 border border-orange-200'>
              <img src="/public/main.jpg" alt="gambar" width={200} className='rounded' />
              <div>
                <h1 className='text-white text-2xl pb-4 pt-2'>Follow Us</h1>
                <div className='flex flex-row gap-3'>
                  <img src="/public/fb.svg" alt="facebook" width={40} className='rounded-t-lg' />
                  <img src="/public/ig.svg" alt="instagram" width={40} className='rounded-t-lg' />
                  <img src="/public/twt.svg" alt="twitter" width={40} className='rounded-t-lg' />
                  <img src="/public/steam.svg" alt="steam" width={40} className='rounded-t-lg' />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-orange-200'>
          <h1 className='text-white text-center items-center justify-center text-xl pb-4'>Copyright : 2023 panduwantara</h1>
          </div>
        </div>
      </div>
    </>
  )
}