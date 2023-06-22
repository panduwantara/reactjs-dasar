import React, { useEffect, useRef, useState } from "react";
import InputForm from "../../molecules";
import Button from "../../atom/Button";
import {login} from "../../../services/auth.services"

export default function Login(){
    const [errorLogin, setErrorLogin] = useState("")
    const handleLogin = (event) =>{
        event.preventDefault()

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        login(data, (status, res) =>{
            if (status) {
                localStorage.setItem("token", res)
                localStorage.setItem("username", event.target.username.value)
                localStorage.setItem("password", event.target.password.value)
                window.location.href = "/products"
            } else {
                console.log("login",res)
                setErrorLogin(res.response.data)
            }
        })
    }

    const usernameRef =useRef(null)
    useEffect(()=>{
        usernameRef.current.focus()
    }, [])

    return(
        <form onSubmit={handleLogin}>
            <InputForm ref={usernameRef} label="Username" name="username" type="text" placeholder="  Masukkan username"/>
            <InputForm label="Password" name="password" type="password" placeholder="  Masukkan password"/>
            <Button color="bg-red-500 flex w-full justify-center items-center">Login</Button>
            {errorLogin && <p className="mt-5 text-center text-sm text-red-500">{errorLogin}</p>}
        </form>
    )
}