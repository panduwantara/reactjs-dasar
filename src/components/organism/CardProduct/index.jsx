import React from 'react'
import Button from '../../atom/Button'
import {Link} from "react-router-dom"

export default function CardProduct(props) {
    const {children} = props
  return (
  <>
  <div className='rounded-lg bg-sky-500 p-1 shadow-xl'>
    <div className='w-full max-w-xs bg-white rounded-lg'>{children}</div>
 </div>
  </>
  )
}


const Header =(props) =>{
    const {image} = props
    return(
        <a href="#">
            <img src={image} alt="gambar" className='p-4 rounded-t-lg h-52 w-80' />
        </a>
    )
}

const Body =(props) => {
const {title, children} =props
return(
    <>
    <div className="flex flex-col items-center justify-center px-5 pb-2">
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
        <div className="flex flex-col items-center justify-center px-5 pb-4">
            <a href="#">
                <h1 className='mt-1 text-slate-500 text-justify font-bold text-[40px]'>{price}</h1>
                <Link to="/produkdetail">
                <Button className='font-bold text-blue-500'>Pesan</Button>
                </Link>
            </a>
        </div>
        </>
    )
    }

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer