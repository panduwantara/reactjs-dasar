import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Login from "../components/organism/login";
import {Link} from "react-router-dom"

export default function signin(){
    return(
    <>
    <div className="bg-[url('../../../public/dog.jpg')] bg-cover"> 
    
        <AuthLayout title="Sign-in" desc="Please Login" type="login">
        <Login/>
        <p className="text-sm mt-4 text-center">
        regis dulu bang kalau gapunya akun{" "}
        {/*<a className="font-bold text-blue-500" href="/register">Register</a>*/}
        {/*cara menggunakan routing pake link buat pindah ke halaman selanjutny*/}
        <Link className="font-bold text-blue-500" to="/register">
        Register
        </Link>
        </p>
        </AuthLayout>
        </div>
    </>
    )
}