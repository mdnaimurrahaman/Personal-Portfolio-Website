import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import CV from '../../../src/Assets/Naimur Rahaman resume 22 .pdf';
import ME from '../../../src/Assets/ME.png'
import Typewriter from "typewriter-effect";
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                
                    <h2 className='hello'data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">Hello I'm</h2>
                    <h1 className='name'data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"><Typewriter
                options={{
                  strings: ["Naimur Rahaman Emon","Graphic Designer","Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              /></h1>
                    <h5 className='text-light' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">Graphic Designer & Mern Stack Developer</h5>
                
                <div className='cta'>
                    <a href={CV} download className='btn' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800">Download CV</a>
                    <a href='#contact'className='btn btn-primary' data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="1000">Let's Talk</a>
                </div>
                <div className='header__socials'>
                    <a href="https://www.linkedin.com/in/mdnaimurrahaman/" target="_blank"><BsLinkedin/></a>
                    <a href="https://github.com/mdnaimurrahaman" target="_blank"><BsGithub/></a>
                    <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
                </div>
                <div className='me' >
                    <img data-aos="fade-up" data-aos-duration="2500" data-aos-delay="1200" src={ME} alt="" srcset="" />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
                
            </div>
        </header>
    );
};

export default Header;