import React from "react";
import InputForm from "../../molecules";
import Input from "../../atom/Input"
import Button from "../../atom/Button";
import {Link} from "react-router-dom"

export default function Login(){
    const handleLogin = (event) => {
        event.preventDefault()
        console.log("terklik login")
        console.log(event.target.email.value)
        console.log(event.target.password.value)
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        window.location.href="/produkdetail"
    }
    return(
        <form onSubmit={handleLogin}>
            <InputForm label="Email" name="email" type="email" placeholder="  Masukkan email"/>
            <InputForm label="Password" name="password" type="password" placeholder="  Masukkan password"/>
        <div className="flex flex-row">
        <InputForm type="checkbox"/><h1 className="text-sm border rounded-md w-full py-1 px-1 text-slate-700">Masih inget aku?</h1>
        </div>
            <Button color="bg-orange-900 flex w-full justify-center items-center">Login</Button>
        </form>
    )
}