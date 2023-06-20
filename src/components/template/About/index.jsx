import React from 'react'
import Detail from '../../organism/ProductDetail'


export default function AboutPage() {
    return (
        <>
            <div className="bg-amber-100 bg-cover flex-full pb-10">
                <div className='flex flex-col text-center justify-center items-center'>
                    <h1 className="text-black font-bold text-6xl text-center justify-center items-center py-5 mb-20">What Our Customer Says</h1>
                    <div className='flex flex-row'>
                        <div className='flex flex-wrap mr-10 w-1/4 justify-center items-center gap-10 pb-10'>
                            <a href=""><img src="/public/kiri.png" width={40} height={40} /></a>
                        </div>
                        <div className=' relative flex flex-col w-full justify-center items-center text-center'>
                            <div className='rounded-full border bg-white border-white absolute top-[-20px]'>
                                <img src='/public/blog.png' width={150} height={150} className='rounded-full' />
                            </div>
                            <div className='bg-black w-[700px] h-[] mt-10'>
                                <p className="bg-black text-xl p-32  text-white text-center">I Have Tested Caffeine Coffe Many Times. Really Amazing To Me. The Combination Was Very Good. One Thing Is To Serve Extraordinary Coffee With Caffeine. I Will Order From Caffeine For Any Of My Coffee Needs.</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap ml-10 w-1/4 justify-center items-center gap-10 pb-10'>
                            <a href=""><img src="/public/kanan.png" width={40} height={40} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

