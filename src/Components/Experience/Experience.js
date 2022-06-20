import React from "react";
import img from '../../../src/Assets/Ex-bg.png'
import "./Experience.css";


const Experience = () => {
  return (
    <section id="experience">
      {/* <h2>Experience</h2> */}
      <div className="container experience__container">
        <div className="experience__content" data-aos="zoom-in-right" data-aos-duration="1500" data-aos-delay="400">
          <img src={img} alt="" srcset="" />
          <div  className="ex-items">
            <article className="ex__item">
              <h2>4+</h2>
              <small>
                Year of Design <br />
                Experience
              </small>
            </article>
            <article className="ex__item">
              <h2>120+</h2>
              <small>
                Satisfied <br />
                clients
              </small>
            </article>
            <article className="ex__item">
              <h2>100+</h2>
              <small>
                Logo <br />
                Design
              </small>
            </article>
            <article className="ex__item">
              <h2>20+</h2>
              <small>
                Brand Identity <br />
                Design
              </small>
            </article>
          </div>
        </div>

        <div className="exp__detail" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-delay="400">
            <small>/ GRAPHIC DESIGNER</small>
            <h5> I have been working successfully Graphic Design
sector for the last 3 years. In 2019, I achieved the creative designer award from
paradise it institutions. I enjoy creative designing & I am interested in learning new technology.</h5>
<small>I have a strong foundation in graphic and interactive design, and an interest in user centred branding and visual systems, understanding their potential within digital spaces.</small>
        </div>

      </div>
    </section>
  );
};

export default Experience;
