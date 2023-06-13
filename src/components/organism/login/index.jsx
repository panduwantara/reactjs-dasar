import React from "react";
import InputForm from "../../molecules";
import Button from "../../atom/Button";

export default function Login(){
    return(
        <form action="">
            <InputForm label="Email" type="email" placeholder="  Masukkan email"/>
            <InputForm label="Password" type="password" placeholder="  Masukkan password"/>
            <Button color="bg-red-500 flex w-full justify-center items-center">Login</Button>
        </form>
    )
}