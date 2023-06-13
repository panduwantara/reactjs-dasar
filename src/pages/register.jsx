import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Register from "../components/organism/register";
import {Link} from "react-router-dom"

export default function signup(){
    return(
        <AuthLayout title="Sign-Up" desc="Please Register" type="register">
        <Register/>
        <p className="text-sm mt-4 text-center">
        silahkan masuk bang{" "}
        {/*<a className="font-bold text-blue-500" href="/register">Register</a>*/}
        {/*cara menggunakan routing pake link buat pindah ke halaman selanjutny*/}
        <Link className="font-bold text-blue-500" to="/login">
        Login
        </Link>
        </p>
        </AuthLayout>
    )
}