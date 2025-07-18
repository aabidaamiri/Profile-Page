import React from 'react'
import './service.css'
import { TbWorldWww } from "react-icons/tb";
import { CiPower, CiStar, CiVideoOn } from "react-icons/ci";
import { CgInpicture, CgWebsite, CgWindows } from 'react-icons/cg';

const Service = () => {
  return (
    <>
      <section id="service" class="body3">
        <div class="ab">
            <h5>Sevices</h5>
            <h1>Services <span>That i can provide for you</span> </h1>
        </div>

        <div class="charts">
            <div class="first">
                <div class="img"><TbWorldWww/></div>
                <h1>Responsive Websites</h1>
                <p>By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences</p>
            </div>

            <div class="first">
                <div class="img"><CgWebsite/></div>
                <h1>Attractive Websites</h1>
                <p>By understanding understanding your needs and goals, of visual composition, color theory, and typography I can create for you engaging title cards, design animated transitions, or choose appropriate background music to match the video's tone</p>
            </div>

            <div class="first">
                <div class="img"><CiStar/></div>
                <h1>High Functionality</h1>
                <p>I can create wireframes and prototypes that outline the layout and user interface element. Also I ensure that the website looks good across different devices and browsers, blending design and functionality</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service
