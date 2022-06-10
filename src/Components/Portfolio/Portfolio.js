import React from 'react';
import {BiRightArrowAlt} from 'react-icons/bi'
import image01 from '../../Assets/Screenshot_3.jpg'
import image02 from '../../Assets/Screenshot_2.jpg'
import image03 from '../../Assets/Screenshot_1.jpg'
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'

import './Portfolio.css';
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={image01} alt="" srcset="" />
                    </div>
                    <div className='portfolio__data'>
                        <h3>Car Parts -manufacturer-website</h3>
                        <p className='portfolio__description'></p>
                    </div>
                            <div className='portfolio__btn'>
                                <a href='https://github.com/mdnaimurrahaman/car-parts-website'  className='btn view-more' target="_blank">Github</a>
                                <a href='https://assignment-12-4a823.web.app/' className='btn btn-primary view-more' target="_blank" >Live Demo <BiRightArrowAlt className='
                                w'/></a>
                            </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={image02} alt="" srcset="" />
                    </div>
                    <div className='portfolio__data'>
                        <h3>Warehouse-Management-website</h3>
                        <p className='portfolio__description'></p>
                    </div>
                            <div className='portfolio__btn'>
                                <a href='https://github.com/mdnaimurrahaman/furnio-warehouse-management'  className='btn view-more' target="_blank">Github</a>
                                <a href='https://furnio-minimal-design.web.app/' className='btn btn-primary view-more' target="_blank" >Live Demo <BiRightArrowAlt className='
                                w'/></a>
                            </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={image03} alt="" srcset="" />
                    </div>
                    <div className='portfolio__data'>
                        <h3>Design Guid-Provider-website</h3>
                        <p className='portfolio__description'></p>
                    </div>
                            <div className='portfolio__btn'>
                                <a href='https://github.com/mdnaimurrahaman/creative-design-guide'  className='btn view-more' target="_blank">Github</a>
                                <a href='https://creative-d-design.web.app/' className='btn btn-primary view-more' target="_blank" >Live Demo <BiRightArrowAlt className='
                                w'/></a>
                            </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={image1} alt="" srcset="" />
                    </div>
                    <div className='portfolio__data'>
                        <h3>Car Parts -manufacturer-website</h3>
                        <p className='portfolio__description'></p>
                    </div>
                            <div className='portfolio__btn'>
                                <a href='#contact'  className='btn view-more'>Hire Me</a>
                                <a href='https://dribbble.com/shots/18460233-Stationery-design' className='btn btn-primary view-more' target="_blank" >Live Demo <BiRightArrowAlt className='
                                w'/></a>
                            </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={image2} alt="" srcset="" />
                    </div>
                    <div className='portfolio__data'>
                        <h3>Car Parts -manufacturer-website</h3>
                        <p className='portfolio__description'></p>
                    </div>
                            <div className='portfolio__btn'>
                                <a href='#contact'  className='btn view-more'>Hire Me</a>
                                <a href='https://dribbble.com/shots/18460827-Logo-and-Brand-identity-design' className='btn btn-primary view-more' target="_blank" >Live Demo <BiRightArrowAlt className='
                                w'/></a>
                            </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__image'>
                        <img src={image3} alt="" srcset="" />
                    </div>
                    <div className='portfolio__data'>
                        <h3>Car Parts -manufacturer-website</h3>
                        <p className='portfolio__description'></p>
                    </div>
                            <div className='portfolio__btn'>
                                <a href='#contact'  className='btn view-more'>Hire Me</a>
                                <a href='https://dribbble.com/shots/18460844-Logo-design' className='btn btn-primary view-more' target="_blank" >Live Demo <BiRightArrowAlt className='
                                w'/></a>
                            </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;