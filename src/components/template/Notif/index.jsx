import React from 'react'
import Detail from '../../organism/ProductDetail'
import Input from '../../atom/Input'


export default function NotifPage() {
    return (
        <>
            <div className="flex bg-orange-200 bg-cover gap-[280px] pb-10">
                    <div className='flex justify-center items-center ml-20 w-[500px]'>
                        <div>
                        <Detail titlex="Stay Up To Date On All News And Offers">
                        </Detail>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <div className="w=[500px] mt-10">
                            <p className='w-96 text-left justify-start'>Be The First To Know About New Collections, Special Events, And What's Going On At Kitchen</p>
                        </div>
                        <div className='flex flex-row w-[400px]'>
                            <Input size="mt-1" placeholder="  Enter Your Email Address "></Input>
                            <a href=""><img src="/public/kanan.png" width={65} height={65} /></a>
                        </div>
                    </div>
                </div>
        </>
    )
}