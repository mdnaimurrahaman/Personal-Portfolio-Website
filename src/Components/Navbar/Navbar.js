import React from 'react';
import {BiHomeCircle} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineTrophy} from 'react-icons/ai'
import {AiOutlineBars} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <a href='#'><BiHomeCircle/></a>
            <a href='#about'><AiOutlineUser/></a>
            <a href='#skills'><AiOutlineBars/></a>
            <a href='#experience'><AiOutlineTrophy/></a>
            <a href='#service'><RiServiceLine/></a>
            <a href='#portfolio'><BiBook/></a>
            <a href='#contact'><BiMessageSquareDetail/></a>
        </div>
    );
};

export default Navbar;