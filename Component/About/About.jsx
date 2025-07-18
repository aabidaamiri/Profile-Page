import React from 'react'
import "./about.css"
import { FaRegCalendar } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";

const About = () => {
    return (
        <>
            <section id="about" class="body2" data-scroll-nav="1">
                <div class="ab-about">
                    <h5>About</h5>
                    <h1>Personal <span>Details</span> </h1>
                </div>
                <div class="divi">
                    <div class="left">
                        <h1>I'm <span>Aabida Amiri </span>and I'm a Web Designer</h1>
                        <p>I am a passionate web designer with a love for creating beautiful and functional websites. I enjoy
                            working with HTML, CSS, and JavaScript to bring ideas to life and enhance user experiences. In my
                            free time, I like to explore new design trends and work on personal projects that challenge my
                            creativity</p>

                        <section class="leftsec">
                            <div class="leftsec-1">
                                <div>
                                    <h2 class="imge"><FaRegCalendar /></h2>
                                    <h5> <span class="dob">Date of Birth: </span> 29 Aug 2000</h5>
                                </div>

                                <div>
                                    <h2 class="imge"><CiPhone /></h2>
                                    <h5> <span class="dob">Phone: </span>+93 77 300 1029</h5>
                                </div>

                                <div>
                                    <h2 class="imge"><SlGraduation /></h2>
                                    <h5> <span class="dob">Degree: </span>BCS</h5>
                                </div>
                            </div>

                            <div class="leftsec-1">
                                <div>
                                    <h2 class="imge"><MdOutlineMail /></h2>
                                    <h5> <span class="dob">Email:</span> aabidaamiri8@gmail.com</h5>
                                </div>

                                <div>
                                    <h2 class="imge"><IoLocationOutline /></h2>
                                    <h5> <span class="dob">Location:</span>Kabul, Afghanistan</h5>
                                </div>

                                <div>
                                    <h2 class="imge"><CgWebsite /></h2>
                                    <h5> <span class="dob">Nationality: </span>Afghan</h5>
                                </div>
                            </div>
                            <button class="hire-btn">Hire Me</button>
                        </section>
                    </div>

                    <div class="right">
                        <h2 class="ab"><span>My Skills</span></h2>
                        <div class="l">
                            <div class="name-lan">
                                <h5>HTML</h5>
                                <h5>95%</h5>
                            </div>
                            <div class="prog">
                                <progress value="95" max="100"></progress>
                            </div>
                        </div>

                        <div class="l">
                            <div class="name-lan">
                                <h5>CSS</h5>
                                <h5>90%</h5>
                            </div>
                            <div class="prog">
                                <progress value="90" max="100"></progress>
                            </div>
                        </div>

                        <div class="l">
                            <div class="name-lan">
                                <h5>JS</h5>
                                <h5>85%</h5>
                            </div>
                            <div class="prog">
                                <progress value="85" max="100"></progress>
                            </div>
                        </div>

                        <div class="l">
                            <div class="name-lan">
                                <h5>React</h5>
                                <h5>80%</h5>
                            </div>
                            <div class="prog">
                                <progress value="80" max="100"></progress>
                            </div>
                        </div>

                        <div class="l">
                            <div class="name-lan">
                                <h5>Tailwind CSS</h5>
                                <h5>85%</h5>
                            </div>
                            <div class="prog">
                                <progress value="85" max="100"></progress>
                            </div>
                        </div>

                        <div class="l">
                            <div class="name-lan">
                                <h5>Bootstrap</h5>
                                <h5>75%</h5>
                            </div>
                            <div class="prog">
                                <progress value="75" max="100"></progress>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
