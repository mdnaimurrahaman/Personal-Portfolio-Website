import React from "react";
import client1 from "../../../src/Assets/client1.jpg";
import client2 from "../../../src/Assets/client2.jpg";
import client3 from "../../../src/Assets/client3.jpg";
import client4 from "../../../src/Assets/client4.jpg";
import "./Testimonials.css";

// import Swiper core and required modules
import { Pagination,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client1} alt="" srcset="" />
          </div>
          <h5 className="client__name">Melissa Montiel</h5>
          <small className="client__review">
          With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client2} alt="" srcset="" />
          </div>
          <h5 className="client__name">Brandon O’Brien</h5>
          <small className="client__review">
          Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client3} alt="" srcset="" />
          </div>
          <h5 className="client__name">Aaron Miller</h5>
          <small className="client__review">
          We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time I would not have had to do it twice.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client4} alt="" srcset="" />
          </div>
          <h5 className="client__name">Tony Farah</h5>
          <small className="client__review">
          Our site is beautiful! It is easy to navigate. The support has been remarkable for WordPress; if I don’t understand something, or can’t accomplish a task, Thrive is very responsive and they lead me in the correct way. Thrive is an extremely talented web design company.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
