import React from 'react'
import './welcome.css'
import Header from '../../Component/Header/Header'
import Herosection from '../../Component/Herosection/Herosection'
import About from '../../Component/About/About'
import Service from '../../Component/Service/Service'
import Banner from '../../Component/Banner/Banner'
import Portfolio from '../../Component/Portfolio/Portfolio'
import Contact from '../../Component/Contact/Contact'
import Footer from '../../Component/Footer/Footer'

const Welcome = () => {
  return (
    <>
      <Header/>
      <Herosection/>
      <About/>
      <Service/>
      <Banner/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Welcome
