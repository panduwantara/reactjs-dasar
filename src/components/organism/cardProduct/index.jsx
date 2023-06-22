import React from 'react'
import Button from '../../atom/Button';

// NESTED COMPONENT

export default function CardProduct(props) {
    const {children} = props;
  return (
    <>
    <div className='rounded-lg items-center justify-center bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-xl'>
        <div className='w-[350px] h-[700px] bg-white rounded-lg'> {children} </div>
    </div>
    </>
  )
}

const Header = (props) => {
    const {image} = props;
    return (
        <div className='justify-center items-center'>
        <a href="#">
            <img src={image} alt="gambar" className='pl-16 pt-10 p-4 rounded-t-lg w-[300px] h-[350px]' />
        </a>
        </div>
    )
}

const Body = (props) => {
    const {title, children} = props;
    return (
        <>
        <div className='px-5 py-4'>
        <a href="#">
            <h5 className='text-start text-2xl font-bold text-slate-900 truncate overflow-hidden'> {title}
            </h5>
            <p className='mt-1 text-black text-base text-justify h-[100px] overflow-auto overflow-hidden mt-10 '> {children}</p>
        </a>
        </div>
       
        </>
    )
}

const Footer = (props) => {
    const {price, children, handleAddToCart, id} = props;
    return (
        <>
        <div >
            <p className=' text-center text-2xl mb-10 font-semibold text-slate-900'> price: {price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
              </p>
              <div className='text-center'>
              <Button color="bg-blue-500" onClick={() => handleAddToCart(id)}>{children}</Button>
              </div>
        </div>
        
      </>
    )
   
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;