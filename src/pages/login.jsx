import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Login from "../components/organism/login";
import Navbar from "../components/template/Navbar"
import NavbarFooter from "../components/template/NavbarFooter"


export default function signin(){
    return(
    <>
    <Navbar/>
    <div className="flex w-full">
        <div className="flex w-[90%]">
        <img src="../main.jpg" alt="Gambar" className="h-62 w-full"/>
        </div>
        <div className="flex w-[30%] justify-center items-center">
        <AuthLayout title="Sign-in" desc="Please Login" type="login">
        <Login/>
        </AuthLayout>
        </div>
        </div>
    </>
    )
}