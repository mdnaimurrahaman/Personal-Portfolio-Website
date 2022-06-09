import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import CV from '../../../src/Assets/Naimur Rahaman resume 22 .pdf';
import ME from '../../../src/Assets/ME.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Naimur Rahaman Emon</h1>
                <h5 className='text-light'>Graphic Designer & Mern Stack Developer</h5>
                <div className='cta'>
                    <a href={CV} download className='btn'>Download CV</a>
                    <a href='#contact'className='btn btn-primary'>Let's Talk</a>
                </div>
                <div className='header__socials'>
                    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
                    <a href="https://github.com" target="_blank"><BsGithub/></a>
                    <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
                </div>
                <div className='me'>
                    <img src={ME} alt="" srcset="" />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
                
            </div>
        </header>
    );
};

export default Header;