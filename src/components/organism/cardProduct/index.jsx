import React from 'react'
import Button from '../../atom/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cardSlices';

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
    const {image, id} = props;
    return (
        <Link to={`/product/${id}`}><div className='justify-center items-center'>
            <img src={image} alt="gambar" className='pl-16 pt-10 p-4 rounded-t-lg w-[300px] h-[350px]' />
        </div>
        </Link>
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
    const dispatch = useDispatch()
    return (
        <>
        <div >
            <p className=' text-center text-2xl mb-10 font-semibold text-slate-900'> price: {price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
              </p>
              <div className='text-center'>
              <Button color="bg-blue-500" onClick={() => dispatch(addToCart({id, qty:1}))}>{children}</Button>
              </div>
        </div>
        
      </>
    )
   
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;