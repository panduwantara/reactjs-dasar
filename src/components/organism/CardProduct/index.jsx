import React from 'react'
import Button from '../../atom/Button'
import {Link} from "react-router-dom"

export default function CardProduct(props) {
    const {children} = props
  return (
  <>
  <div className='border border-black'>
    <div className='bg-orange-200 p-1'>
    <div className='w-full max-w-xs rounded-lg'>{children}</div>
    </div>
 </div>
  </>
  )
}


const Header =(props) =>{
    const {image} = props
    return(
        <a href="#">
            <img src={image} alt="gambar" className='rounded border bg-black border-orange-200 p-4 h-70 w-70' />
        </a>
    )
}

const Body =(props) => {
const {title, children} =props
return(
    <>
    <div className="flex flex-col items-center justify-center px-5 pb-2 bg-orange-200">
        <a href="#">
            <h5 className='text-3xl font-bold text-slate-900'>{title}</h5>
            <p className='mt-1 text-slate-500 text-base text-justify'>{children}</p>
        </a>
    </div>
    </>
)
}

const Footer =(props) => {
    const {price} =props
    return(
        <>
        <div className="mx-3 my-3 flex flex-col items-center justify-center pb-4 border-black rounded-full bg-slate-200 px-8">
    
            <a href="#">
                <h1 className='mt-1 text-black text-justify font-bold text-[40px]'>{price}</h1>
            </a>
            </div>
        </>
    )
    }

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer