import React from 'react'
import './contact.css'
import photocontact from '../img/R.jpeg'

const Contact = () => {
    return (
        <div>
            <section id='contact' class="body5">
                <div class="ab">
                    <h5>Contact Us</h5>
                    <h1>Get <span>IN TOUCH</span> </h1>
                </div>

                <div class="contact-area">
                    <div class="contact-left">
                        <div class="contact-photo">
                            <img src={photocontact} alt="" />
                        </div>
                    </div>

                    <div class="contact-right">
                        <div class="contact-info">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="contact-info-down">
                            <input type="number" placeholder="Phone No"/>
                            <input type="text" placeholder="Subject" />
                            <textarea rows="6" name="textarea" id="textarea" placeholder="Your Message"></textarea>
                        </div>
                        <div class="intro">
                            <button>Send Message</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
