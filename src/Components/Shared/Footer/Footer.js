import React from 'react';
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import logo from '../../../Assets/My-logo-2.png'

const Footer = () => {
    return (
        <footer>
            <div className='footer__logo'>
                <a href='#' className=''><img src={logo} alt="" srcset="" /></a>
            </div>

            <div className="permalinks">
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </div>

            <div className="footer__socials">
                <a href='https://facebook.com'><FaFacebookF/></a>
                <a href='https://linkedin.com'><FaLinkedinIn/></a>
                <a href='https://dribbble.com'><FiDribbble/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Md Naimur Rahaman Emon. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;