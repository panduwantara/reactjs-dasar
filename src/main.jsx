import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx"
import RegisterPage from "./pages/register.jsx"
import ErrorPage from "./pages/error.jsx"
import ProductPage from './pages/products';
import Profile from './pages/profile';
import DetailProductPage from './pages/detailProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/product/:id",
    element: <DetailProductPage/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
