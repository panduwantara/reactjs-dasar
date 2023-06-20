import React from 'react'
import MenuPage from "../components/template/Menu"
import HomePage from "../components/template/Home"
import CardPage from "../components/template/Card"
import AboutPage from "../components/template/About"
import NotifPage from "../components/template/Notif"
import NavbarFooter from '../components/template/NavbarFooter'
import Detail from '../components/organism/ProductDetail'
import Button from '../components/atom/Button'


export default function ProductDetail() {
  return (
      <>
      <HomePage/>
      <MenuPage/>
      <CardPage/>
      <AboutPage/>
      <NotifPage/>
      <NavbarFooter/>
      </>
      )
  }