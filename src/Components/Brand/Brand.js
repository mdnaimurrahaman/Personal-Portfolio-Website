import React from 'react';
import icon1 from '../../../src/Assets/google.png'
import icon2 from '../../../src/Assets/facebook.png'
import icon3 from '../../../src/Assets/sportify.png'
import icon4 from '../../../src/Assets/Nike.png'
import icon5 from '../../../src/Assets/slack.png'
import './Brand.css'

const Brand = () => {
    return (
        <div className='container Brand__container'>
            <div className='line' data-aos="zoom-out-down" data-aos-duration="1500" data-aos-delay="400"></div>
            <div className="brand__items">
            <div className="item" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="500">
              <img src={icon1} alt="" srcset="" />
            </div>
            <div className="item" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="600">
              <img src={icon2} alt="" srcset="" />
            </div>
            <div className="item" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="700">
              <img src={icon3} alt="" srcset="" />
            </div>
            <div className="item" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="800">
              <img src={icon4} alt="" srcset="" />
            </div>
            <div className="item" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="900">
              <img src={icon5} alt="" srcset="" />
            </div>
          </div>
        </div>
    );
};

export default Brand;