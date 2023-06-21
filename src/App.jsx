import React from "react"
import ComponentProps from "./belajar/componentProps"
import InputForm from "./components/molecules"
import Login from "./components/organism/login"
import AuthLayout from "./components/template/AuthLayout"
import SignIn from "./pages/login"
import Signup from "./pages/register"
import Counter from "./belajar/Lifecycle/Counter"

function App() {
  return (
    // simbol <> = fragment sebagai parent dari suatu comment
    <>
    <Counter/>
    </>
  )
}
export default App
