import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Register from "../components/organism/register";
import Navbar from "../components/template/Navbar"
import NavbarFooter from "../components/template/NavbarFooter"


export default function signup(){
    return(
    <>
    <Navbar/>
    <div className="flex w-full">
        <div className="flex w-[90%]">
        <img src="../drugs.jpg" alt="Gambar" className="h-62 w-full"/>
        </div>
        <div className="flex w-[30%] justify-center items-center">
        <AuthLayout title="Sign-Up" desc="Please Register" type="register">
        <Register/>
        </AuthLayout>
        </div>
        </div>
    <NavbarFooter/>
    </>
    )
}