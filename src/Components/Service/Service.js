import React from 'react';
import {BsGrid1X2} from 'react-icons/bs'
import {BiRightArrowAlt} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'
import {BsPencil} from 'react-icons/bs'
import {SiAltiumdesigner} from 'react-icons/si'

import './Service.css'

const Service = () => {
    return (
        <section id='service'>
            <h5> What I Offer</h5>
            <h2> Services</h2>
            <div className="container services__container">
                <div className="services__content">
                    <div>
                        <BsGrid1X2 className='about-icon'/>
                        <h3 className='services__title'>Ui/Ux <br/>Design</h3>
                    </div>
                    <div className='btn btn-primary view-more'>
                        View More
                        <BiRightArrowAlt className='
                        arrow'/>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <BsCodeSlash className='about-icon'/>
                        <h3 className='services__title'>Frontend <br/>Development</h3>
                    </div>
                    <div className='btn btn-primary view-more'>
                        View More
                        <BiRightArrowAlt className='
                        arrow'/>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <BsPencil className='about-icon'/>
                        <h3 className='services__title'>Graphic <br/>Design</h3>
                    </div>
                    <div className='btn btn-primary view-more'>
                        View More
                        <BiRightArrowAlt className='
                        arrow'/>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <SiAltiumdesigner className='about-icon'/>
                        <h3 className='services__title'>Logo Design <br/>Specialist</h3>
                    </div>
                    <div className='btn btn-primary view-more'>
                        View More
                        <BiRightArrowAlt className='
                        arrow'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;