import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Register from "../components/organism/register";
import {Link} from "react-router-dom"

export default function signup(){
    return(
        <AuthLayout title="Sign-Up" desc="Please Register" type="register">
        <Register/>
        </AuthLayout>
    )
}