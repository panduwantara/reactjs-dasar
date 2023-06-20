import React from 'react'
import CardProduct from '../../organism/CardProduct'


const data =[
  {
    id:1,
    image:"/public/cardcap.png",
    title:"Cappucino",
    price:"Order Now"
  },
  {
    id:2,
    image:"/public/cardam.jpg",
    title:"Americano",
    price:"Order Now"
  },
  {
    id:3,
    image:"/public/cardes.png",
    title:"Espresso",
    price:"Order Now"
  }
]

export default function CardPage() {
  return (
    <>
    <div className="bg-orange-200 bg-cover flex-full">
    <div className='flex flex-col text-center justify-center items-center'>
    <h1 className="text-black font-bold text-6xl text-center justify-center items-center py-5">Best Selling Item</h1>
    <p className="mt-10 text-slate-500 w-[580px] text-center ">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
    <div className='mt-10 mb-10'>
        <ul className='flex gap-10 text-2xl font-bold text-center justify-center items-center mx-16 text-black'>
          <li className='w-28'>
            <a href="#">All</a>
          </li>
          <li className='w-28'>
            <a href="#">Black</a>
          </li>
          <li className='w-28'>
            <a href="#">Espresso</a>
          </li>
          <li className='w-28'>
            <a href="#">Doppio</a>
          </li>
        </ul>
      </div>
    </div>
    <div className=" flex flex-wrap mb-20 justify-center items-center gap-x-10 gap-y-10 py-5 ">
    {/*<CardProduct>
        <CardProduct.Header image="public/dog.jpg"/>
        <CardProduct.Body title="Ring Tinju" className="flex justify-center items-center">
        Wisata mistis ini merupakan bekas rumah sakit yang letaknya ada di depan gazebo Blambangan. Katanya, tempat ini menyimoan masa lalu sejarah yang kelam. Tempat wisata mistis asrama Inggrisan ini pernah dijadikan lokasi pembantaian pada zaman Belanda. jika malam telah tiba sering terdengar suara jeritan-jeritan minta tolong dan katanya sering terjadi penampakan seorang noni Belanda yang berlalu lalang di sekitar Asrama Inggrisan.
        </CardProduct.Body>
        <CardProduct.Footer>Rp500.000</CardProduct.Footer>
    </CardProduct>*/}
    {data.map((product)=>(
      <CardProduct key={product.id}>
        <CardProduct.Header image={product.image} />
        <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
        <CardProduct.Footer price={product.price} />
      </CardProduct>
    ))}
    </div>
    <div className='flex flex-wrap justify-center items-center gap-10 pb-20'>
        <div>
            <a href=""><img src="/public/kiri.png" width={40} height={40}/></a>
        </div>
        <div>
        <a href=""><img src="/public/kanan.png" width={40} height={40}/></a>
        </div>
    </div>
    </div>
    </>
  )
}
