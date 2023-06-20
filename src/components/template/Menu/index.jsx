import React from 'react'
import Detail from '../../organism/ProductDetail'


export default function MenuPage() {
  return (
    <>
      <div className="bg-amber-100 bg-cover flex-full">
        <div className='flex items-center justify-center px-16 pt-1'>
          <div className='flex flex-row w-auto h-fit mt-10 gap-20'>
            <img src="/public/capucino.jpg" alt="gambar" width={400} className=' -rotate-6 ml-14 mt-14 rounded-t-lg' />
            <div className='flex flex-col justify-center items-center'>
              <Detail titlex="Coffee Heaven">
                <p className='w-[450px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
              </Detail>
              <div className='w-full ml-10'>
              <div className='flex bg-orange-950 w-32 h-10 items-center justify-center rounded text-white'>
                <a href="">View All ></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-100 bg-cover flex-full">
        <div className='flex items-center justify-center px-16 pt-1 pb-10'>
          <div className='flex flex-row w-auto h-fit mt-10 gap-20'>
          <div className='flex flex-col justify-center items-center'>
              <Detail titlex="Jean's Coffee">
                <p className='w-[450px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
              </Detail>
              <div className='w-full ml-10'>
              <div className='flex bg-orange-950 w-32 h-10 items-center justify-center rounded text-white'>
                <a href="">View All ></a>
              </div>
              </div>
            </div>
            <img src="/public/es.jpg" alt="gambar" width={400} className=' -rotate-6 ml-14 mt-14 mb-14 rounded-t-lg' />
          </div>
        </div>
      </div>
    </>
  )
}