import React from 'react'
import {Link} from "react-router-dom"

export default function AuthLayout(props) {
    const {children, title, desc, type} = props
    return (
      <>
      <div className="flex flex-col min-h-screen items-center gap-x-10 pt-10">
        <div className="rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 p-1">
          <div className="w-full max-w-xs border rounded-lg p-8 bg-white">
            <h1 className='text-3xl font-bold mb-2 text-blue-500'>{title}</h1>
            <p className='font-medium text-slate-500 mb-4'>{desc}</p>
            {children}
            {/*cara pertama untuk memilih kondisional*/}
            <p className='text-sm mt-5 text-center'>
              {type ==="login" ? "gapunya akun?" : "udah punya akun?"}</p>
              {type === "login" && (
                <Link to="/register" className="text-blue-500 font-bold">
                  Daftar gaes
                </Link>
              )}
              {type === "register" && (
                <Link to="/login" className="text-blue-500 font-bold">
                  Masuk gaes
                </Link>
              )}
              {/*Cara ke 2 */}
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
                <Link to="/login" className='text-blue-500 font-bold'>
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