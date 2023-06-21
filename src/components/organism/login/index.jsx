import React, { useEffect, useRef } from "react";
import InputForm from "../../molecules";
import Button from "../../atom/Button";

export default function Login(){
    const handleLogin = (event) => {
        event.preventDefault()
        //console log 1
        console.log("terklik login")
        //console log buat ngambil value email
        console.log(event.target.email.value)
        console.log(event.target.password.value)
        //buat nyimpen data dari form input ke penyimpanan browser
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        //untuk mendirek ke halaman lain
        window.location.href="/products"
    }
    
    //useRef = hooks yang biasa dipake buat ngakses Dom
    //bedanya sama usestate, useref ga bakal dirender ulang
    //useref tidak bisa diakses pake props tapi pake fowardstep
    const emailRef = useRef(null)
    useEffect(() => {
        emailRef.current.focus()
    })

    return(
        <form onSubmit={handleLogin}>
            <InputForm label="Email" name="email" type="email" placeholder="  Masukkan email" ref={emailRef}/>
            <InputForm label="Password" name="password" type="password" placeholder="  Masukkan password"/>
            {/*<Button onClick={handleLogin}color="bg-red-500 flex w-full justify-center items-center">Login</Button>*/}
            <Button color="bg-red-500 flex w-full justify-center items-center">Login</Button>
        </form>
    )
}