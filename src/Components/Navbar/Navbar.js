import React, { useState } from 'react';
import {BiHomeCircle} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TbAward} from 'react-icons/tb'
import {AiOutlineBars} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><BiHomeCircle/></a>
            <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser/></a>
            <a href='#skills' onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills'? 'active' : ''}><AiOutlineBars/></a>
            <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><TbAward/></a>
            <a href='#service' onClick={()=> setActiveNav('#service')} className={activeNav === '#service'? 'active' : ''}><RiServiceLine/></a>
            <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active' : ''}><BiBook/></a>
            <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
        </nav>
    );
};

export default Navbar;