import React from 'react'
import Button from "../../atom/Button";
import {Link} from "react-router-dom"

export default function Detail(props) {
    const {title, children} =props
return(
    <>
    <div className="px-5 py-4">
        <a href="#">
            <h5 className='text-3xl font-bold text-slate-900'>{title}</h5>
            <p className='mt-1 text-slate-500 text-base text-justify'>{children}</p>
        </a>
    </div>
    </>
)
}
