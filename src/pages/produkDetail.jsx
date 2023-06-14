import React from 'react'
import Navbar from "../components/template/Navbar"
import NavbarFooter from "../components/template/NavbarFooter"
import Detail from '../components/organism/ProductDetail'
import { useState } from 'react'
import Button from '../components/atom/Button'


export default function ProductDetail() {
    const [count, setCount] = useState(0)
  return (
    <>
    <Navbar/>
    <div className='flex mt-20 min-h-fit'>
    <div className='flex flex-col'>
    <div>
    <img src="/public/hell.jpg" alt="gambar" width={550} className='p-4 rounded-t-lg' />
    </div>
    <div className='flex items-center justify-center text-center'>
    <div className='flex flex-wrap justify-center items-center'>    
        <div className='p-2'>
            <button className={`font-semibold rounded-md bg-slate-950 w-7 text-white m-4`}onClick={() => setCount((count) => count - 1)}>
            -
        </button></div>
         <div className='text-center items-center justify-center'> 
         <p className='text-center'>{count}</p>
         </div>
        <div className='p-2'>
            <button className={`font-semibold rounded-md bg-slate-950 w-7 text-white m-4`} onClick={() => setCount((count) => count + 1)}>
            +
            </button>
        </div >
        </div>
    
    </div>
    <div className="text-center">
    <Button>Buy Now</Button>
    </div>
    </div>
    <div className='flex w-auto h-fit'>
    <Detail title="AZAB TELAH MEMBELI BARANG HARAM">
        <p>Hukum narkoba dan penyalahgunaan obat-obatan terlarang adalah haram selain untuk tujuan medis dalam kondisi terpaksa atau kebutuhan. Keharaman narkoba dan penyalahgunaan obat-obatan terlarang sama seperti keharaman minuman keras yang diharamkan berdasarkan nash-nash Al-quran dan hadist yang bersifat pasti.</p>
        <p1>Islam mengharamkan memakan sesuatu yang buruk dan membahayakan, sebagaimana firman Allah SWT, " …dan menghalalkan bagi mereka segala yang baik dan mengharamkan bagi mereka segala yang buruk." (QS al-A'raf [7]: 157).</p1>
        <p>Rasulullah SAW juga bersabda, " Tidak boleh membahayakan diri sendiri dan tidak boleh memberi bahaya (mudarat) kepada orang lain." (HR Ahmad, Ibnu Majah).
        </p>
        </Detail>
    <div>
        <img src="/public/wedus.png" alt="gambar" width={200} height={200} className='p-4 rounded-t-lg' />

    </div>
    </div>
    </div>
    <NavbarFooter/>
    </>
  )
}