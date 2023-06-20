import React from 'react'
import CardProduct from'../components/organism/CardProduct'
import Navbar from "../components/template/Navbar"
import NavbarFooter from "../components/template/NavbarFooter"


const data =[
  {
    id:1,
    image:"/public/heroin.jpeg",
    title:"Heroin",
    desc:"Efek samping mulut kering, anggota tubuh terasa berat dan sulit digerakkan. Selain itu, heroin menyebabkan mudah mengantuk, mual, kulit gatal, pernapasan lebih lambat, serta sembelit.",
    price:"Rp.100.000"
  },
  {
    id:2,
    image:"/public/ganja.jpg",
    title:"Canabis",
    desc:"Pemakaian ganja terlalu banyak dapat mengganggu kemampuan berpikir. Kamu juga bisa mengalami kehilangan memori hingga terhambatnya fungsi otak dan mati tolol. Dolor lorem ipsum sialan",
    price:"Rp.250.000"
  },
  {
    id:3,
    image:"/public/cocain.jpg",
    title:"Kokain",
    desc:"Serangan jantung, kejang, dan henti napas, bisa terjadi kapan saja. Bahkan, kematian akibat overdosis bisa terjadi pada penggunaan kokain yang pertama kali, terutama jika digunakan bersamaan dengan alkohol.",
    price:"Rp.575.000"
  },
  {
    id:4,
    image:"/public/sabu.jpg",
    title:"Metamfetamin",
    desc:"Merasa lemas, tidak berenergi, cemas, dan takut yang berlebihan. Karena sudah sempat merasakan efek yang menyenangkan dari sabu, penggunanya akan menggunakannya lagi",
    price:"Rp.400.000"
  },
  {
    id:5,
    image:"/public/heroin.jpeg",
    title:"Heroin",
    desc:"Efek samping mulut kering, anggota tubuh terasa berat dan sulit digerakkan. Selain itu, heroin menyebabkan mudah mengantuk, mual, kulit gatal, pernapasan lebih lambat, serta sembelit.",
    price:"Rp.100.000"
  },
  {
    id:6,
    image:"/public/ganja.jpg",
    title:"Canabis",
    desc:"Pemakaian ganja terlalu banyak dapat mengganggu kemampuan berpikir. Kamu juga bisa mengalami kehilangan memori hingga terhambatnya fungsi otak dan mati tolol. dolor lorem ipsum sialan",
    price:"Rp.250.000"
  },
  {
    id:7,
    image:"/public/cocain.jpg",
    title:"Kokain",
    desc:"Serangan jantung, kejang, dan henti napas, bisa terjadi kapan saja. Bahkan, kematian akibat overdosis bisa terjadi pada penggunaan kokain yang pertama kali, terutama jika digunakan bersamaan dengan alkohol.",
    price:"Rp.575.000"
  },
  {
    id:8,
    image:"/public/sabu.jpg",
    title:"Metamfetamin",
    desc:"Merasa lemas, tidak berenergi, cemas, dan takut yang berlebihan. Karena sudah sempat merasakan efek yang menyenangkan dari sabu, penggunanya akan menggunakannya lagi",
    price:"Rp.400.000"
  },
  {
    id:9,
    image:"/public/heroin.jpeg",
    title:"Heroin",
    desc:"Efek samping mulut kering, anggota tubuh terasa berat dan sulit digerakkan. Selain itu, heroin menyebabkan mudah mengantuk, mual, kulit gatal, pernapasan lebih lambat, serta sembelit.",
    price:"Rp.100.000"
  },
  {
    id:10,
    image:"/public/ganja.jpg",
    title:"Canabis",
    desc:"Pemakaian ganja terlalu banyak dapat mengganggu kemampuan berpikir. Kamu juga bisa mengalami kehilangan memori hingga terhambatnya fungsi otak dan mati tolol. dolor lorem ipsum sialan",
    price:"Rp.250.000"
  },
  {
    id:11,
    image:"/public/cocain.jpg",
    title:"Kokain",
    desc:"Serangan jantung, kejang, dan henti napas, bisa terjadi kapan saja. Bahkan, kematian akibat overdosis bisa terjadi pada penggunaan kokain yang pertama kali, terutama jika digunakan bersamaan dengan alkohol.",
    price:"Rp.575.000"
  }
]

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <h1 className="text-sky-500 font-bold text-4xl text-center py-5">CARD LIST</h1>
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
    <NavbarFooter/>
    </>
  )
}
