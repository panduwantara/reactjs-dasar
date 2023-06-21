import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx"
import RegisterPage from "./pages/register.jsx"
import ProductPage from "./pages/products"
import Counter from "./belajar/Lifecycle/Counter"
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
    element: <ProductPage />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
