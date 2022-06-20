
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import './Contact.css'
import { useRef } from 'react';
import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';




const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_p0uqrhz', 'template_axsy2uj', form.current, 'XbpBt79Jxb9dTKq3-')
          .then((result) => {
            e.target.reset();
            // toast('Your message successfully send')

              console.log(result.text);
          }, (error) => {

              console.log(error.text);
          });
      };
    return (
        <section id='contact'>
           <h5 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="400">Get In Touch</h5>
           <h2 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="600">Contact Me</h2>

           {/* <ToastContainer/> */}

           <div className="container contact__container">
            <div className="contact__options">
                <article className='contact-option' data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="800">
                    <MdOutlineMailOutline className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>mdnaimur.work@gmail.com</h5>
                    <a href="mailto:mdnaimur.work@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className='contact-option'  data-aos="fade-up-right" data-aos-duration="2000" data-aos-delay="1000">
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h5>emon/2075</h5>
                    <a href="https://m.me/emon2075" target="_blank">Send a message</a>
                </article>
                {/* <article className='contact-option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>Whats up</h4>
                    <h5>+8801402723889</h5>
                    <a href="https://api.whatsapp.com/send?phone+8801402723889"target="_blank">Send a message</a>
                </article> */}
            </div>
            <form  ref={form} onSubmit={sendEmail}>
                    <input data-aos="fade-up-left" data-aos-duration="2000" data-aos-delay="1400" type="text" name='name' placeholder='Your Full Name' required />
                    <input data-aos="fade-up-left" data-aos-duration="2000" data-aos-delay="1400" type="email" name='email' placeholder='Your Email' required />
                    <textarea data-aos="fade-up-left" data-aos-duration="2000" data-aos-delay="1400" name="message" rows="4" placeholder='Your Message' required></textarea>
                    <button data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1700" typeof='submit' className='btn btn-primary'>Send Message</button>
                </form>
           </div>
        </section>
    );
};

export default Contact;