import React from 'react';
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {RiFolderOpenFill} from 'react-icons/ri'
import ME from '../../../src/Assets/aboutMe.png'
import './About.css'

const About = () => {
    return (
        <section id='about'>
            <h5 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="600"> Get To Know</h5>
            <h2 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="800"> About Me</h2>

            <div className="container about__container">
                <div className='about__me'>
                    <div className='about__me-image' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                        <img src={ME} alt="" srcset="" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300">
                            <FaAward className='about-icon'/>
                            <h5>Experience</h5>
                            <small>4 Years Working</small>
                        </article>
                        <article className='about__card' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
                            <FaUsers className='about-icon'/>
                            <h5>Clients</h5>
                            <small>200+</small>
                        </article>
                        <article className='about__card' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="700">
                            <RiFolderOpenFill className='about-icon'/>
                            <h5>Projects</h5>
                            <small>75+ Complete</small>
                        </article>
                    </div>
                    <p data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="700">
                        Hello, My name is Md Naimur Rahaman.I'm passionate About Graphic Design And Front-End Web Development. I know how important user interface design is in the field of website development.I have been working successfully in the Graphic Design sector for the last 4 years. In 2019, I achieved the creative designer award from Paradise IT institutions. I enjoy creative designing & I am interested in learning new technology. I want to join a Professional life to gain exposure, confidence & a sense ofachievement. I believe in success through hard work &dedication.

                        </p>
                        <a data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" href='#contact'className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;