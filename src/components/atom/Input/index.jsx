import React from "react"

export default function Input(props){
    const {type, size, placeholder, name, children} = props
    return(
        <input
        type={type}
        className= {`${size} text-sm border rounded-md w-full py-2 py-3 text-slate-700 bg-stone-800 placeholder:text-slate-400`}
        placeholder={placeholder}
        name={name}
        id={name}
        >{children}</input>
    )
}