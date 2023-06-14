import React from "react"

export default function Button(props){
    const {color="bg-blue-900",children,size }=props//untuk text defaultnya
    //dibawah ini adalah cara menggunakan props
    return(
    <>
    <button className={`h-10 px-6 font-semibold rounded-md text-center ${color} ${size} text-white w-full` }>{children}</button>
    </>
) }