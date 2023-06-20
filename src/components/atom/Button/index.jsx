import React from "react"

export default function Button(props){
    const {color="bg-blue-900",children,size,type="submit", onClick = () => {} }=props//untuk text defaultnya
    //dibawah ini adalah cara menggunakan props
    return(
    <>
    <button onClick={onClick} type={type} className={`h-10 px-6 font-semibold rounded-md text-center ${color} ${size} text-white w-full` }>{children}</button>
    </>
) }