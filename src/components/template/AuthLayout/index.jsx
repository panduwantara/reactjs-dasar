import React from 'react'
import {Link} from "react-router-dom"

export default function AuthLayout(props) {
    const {children, title, desc, type} = props
    return (
      <>
      <div className="flex w-full h-full items-center gap-x-10">
        <div className="h-full w-96 bg-amber-100 p-1">
          <div className="w-full h-full border rounded-lg p-8 bg-amber-100">
            <h1 className='text-3xl font-bold mb-2 text-blue-500'>{title}</h1>
            <p className='font-medium text-slate-500 mb-4'>{desc}</p>
            
            {children}
              {/*Kondisional Login */}
              {type === "login" ? (
              <p className='text-sm mt-5 text=center'>
                gapunya akun?{" "}
                <Link to="/register" className='text-blue-500 font-bold'>
                  daftar
                </Link>
              </p>
              ) : (
              <p className='text-sm mt-5 text=center'>
                 udah punya akun?{" "}
                <Link to="/" className='text-blue-500 font-bold'>
                  masuk
                    </Link>
            </p>
            )}
          </div>
        </div>
      </div>
      </>
    )
}
