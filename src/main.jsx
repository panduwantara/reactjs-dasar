import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx"
import RegisterPage from "./pages/register.jsx"
import ErrorPage from "./pages/error.jsx"
import HomePage from "./pages/home"
import ProductDetail from "./pages/produkDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement:<ErrorPage/>
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/produkdetail",
    element: <ProductDetail />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
