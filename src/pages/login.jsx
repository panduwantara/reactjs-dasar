import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Login from "../components/organism/login";
import {Link} from "react-router-dom"
import { useState } from "react";

export default function signin(){
    const [] = useState([])
    return(
    <>
    <div className="bg-[url('../../../public/dog.jpg')] bg-cover"> 
    
        <AuthLayout title="Sign-in" desc="Please Login" type="login">
        <Login/>
        </AuthLayout>
        </div>
    </>
    )
}