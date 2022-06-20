import React, { useState } from "react";
import { BsBraces } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
        <h5 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="600"> My Technical Level</h5>
        <h2 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="800"> Skills</h2>
      <div className="container skills__container">
        
          <div className="skills__content skills__open" data-aos="fade-right" data-aos-duration="2500" data-aos-delay="1000">
            <div className="skills__header">
              <BsBraces className="skills__icon" />
              <div>
                <h3 className="skills__title">Frontend Developer</h3>
                <small className="skills__subtitle">More than 1 years</small>
              </div>
              <FiChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">HTML</h5>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">css</h5>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">JavaScript</h5>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">React</h5>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Bootstrap</h5>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__bootstrap"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Tailwind</h5>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__tailwind"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__content skills__open" data-aos="zoom-out-up" data-aos-duration="2500" data-aos-delay="1000">
            <div className="skills__header">
              <AiOutlineCloudServer className="skills__icon" />
              <div>
                <h3 className="skills__title">Backend Developer</h3>
                <small className="skills__subtitle">More than 1 years</small>
              </div>
              <FiChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Node Js</h5>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__nodejs"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Firebase</h5>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__firebase"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Mongodb</h5>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__mongodb"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Stripe</h5>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills__content skills__open" data-aos="fade-left" data-aos-duration="2500" data-aos-delay="1000">
            <div className="skills__header">
              <MdOutlineDesignServices className="skills__icon" />
              <div>
                <h3 className="skills__title">Graphic Design</h3>
                <small className="skills__subtitle">More than 3 years</small>
              </div>
              <FiChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Logo Design</h5>
                  <span className="skills__number">Modern</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__logo"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Branding Design</h5>
                  <span className="skills__number">Creative</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__brand"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Website Ui Design</h5>
                  <span className="skills__number">Minimalist</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__website"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Publishing design</h5>
                  <span className="skills__number">Minimalist</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__publishing"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Product design</h5>
                  <span className="skills__number">Unique</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__product"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Print Design</h5>
                  <span className="skills__number">Minimalist</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__print"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h5 className="skills__name">Vector Art</h5>
                  <span className="skills__number">Creative</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__art"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Skills;
