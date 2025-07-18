import React from 'react'
import "./herosection.css"
import photo from "../img/ab.jpg"
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const Herosection = () => {
  return (
    <>
      <section class="body" id="home">
        <div class="intro">
            <h4>HELLO, I'M</h4>
            <h1>ABEDA AMIRI</h1>
            <p>A frontend web developer</p>

            <button><a href="#portfolio">View My works</a></button>

            <div class="social-con">
                <div class="line"></div>
                <div class="icons">
                    <a href="https://www.facebook.com/Aabi.amiri" target="_blank"><h2><LuFacebook/></h2></a>
                    <a href="https://github.com/aabidaamiri/aabidaamiri.github.io" target="_blank"><h2><LuGithub/></h2></a>
                    <a href="https://www.instagram.com/a._.miri_/" target="_blank"><h2><LuInstagram/></h2></a>
                    <a href="https://www.linkedin.com/in/abeda-amiri-72517a1bb/" target="_blank"><h2><SlSocialLinkedin/></h2></a>
                </div>
            </div>
        </div>

        <div class="photo">
            <img src={photo} alt=""/>
        </div>
    </section>
    </>
  )
}

export default Herosection
