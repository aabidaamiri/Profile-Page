import React, { useState } from 'react'
import "./header.css"
import hb from '../img/a.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    const [showMobile , setShowMobile] = useState(false);
  return (
    <>
      <header>
        <h3>My Portfolio</h3>
        <nav>
            <ul>
                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#about">
                    <li>About</li>
                </a>
                <a href="#service">
                    <li>Services</li>
                </a>
                <a href="#portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
                
            </ul>
        </nav>
        <div id='menu-icon' className="menu-icon" onClick={()=> setShowMobile(!showMobile)}>
            <GiHamburgerMenu/>
            {
                showMobile &&

            <ul className='mobile-menu' >
                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#about">
                    <li>About</li>
                </a>
                <a href="#service">
                    <li>Services</li>
                </a>
                <a href="#portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </ul>
}
            </div>
    </header>
    </>
  )
}

export default Header
