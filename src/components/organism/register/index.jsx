import React from "react";
import InputForm from "../../molecules";
import Button from "../../atom/Button";
import {Link} from "react-router-dom"

export default function Register(){
    return(
        <form action="">
            <InputForm label="Username" type="text" placeholder="  Masukkan username"/>
            <InputForm label="Email" type="email" placeholder="  Masukkan email"/>
            <InputForm label="Password" type="password" placeholder="  Masukkan password"/>
            <InputForm label="Konfirmasi password" type="password" placeholder="  Konfirmasi password"/>
            <Button color="bg-orange-900 flex w-full justify-center items-center">Register
            </Button>
        </form>
    )
}