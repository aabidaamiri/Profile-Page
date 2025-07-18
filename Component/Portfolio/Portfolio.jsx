import React from 'react'
import './portfolio.css'
import photo1 from '../img/pro1.png'
import photo2 from '../img/pa2.jpg'
import photo3 from '../img/pa3.jpeg'
import photo4 from '../img/pa4.jpeg'
import photo5 from '../img/pa5.jpeg'
import photo6 from '../img/pa6.jpeg'

const Portfolio = () => {
    return (
        <div>
            <section id='portfolio' class="body4">
                <div class="ab">
                    <h5>Portfolio</h5>
                    <h1>My latest <span>WORKS</span> </h1>
                </div>

                

                <div class="photo-area">
                    
                    <a href="https://my-portfolio-one-omega-31.vercel.app/" target='_blank'><img src={photo1} alt="" /></a>
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                    <img src={photo4} alt="" />
                    <img src={photo5} alt="" />
                    <img src={photo6} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Portfolio
