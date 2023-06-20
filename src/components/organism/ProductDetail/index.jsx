import React from 'react'
import Button from "../../atom/Button";
import {Link} from "react-router-dom"

export default function Detail(props) {
    const {title, titlex, harga, children} =props
return(
    <>
    <div className="px-5 py-4">
        <a href="#">
            <h5 className='text-6xl font-bold text-white'>{title}</h5>
            <h5 className='text-5xl  font-bold text-yellow-950'>{titlex}</h5>
            <p className='mt-1 text-slate-500 w-400 text-base text-justify'>{children}</p>
            <p className='mt-1 text-slate-500 text-justify font-bold text-[40px]'>{harga}</p>
        </a>
    </div>
    </>
)
}
