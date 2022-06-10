import React from 'react';
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './Contact.css'

const Contact = () => {
    return (
        <section id='contact'>
           <h5>Get In Touch</h5>
           <h2>Contact Me</h2>

           <div className="container contact__container">
            <div className="contact__options">
                <article className='contact-option'>
                    <MdOutlineMailOutline className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>mdnaimur.work@gmail.com</h5>
                    <a href="mailto:mdnaimur.work@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className='contact-option'>
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
            <form action=''>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="4" placeholder='Your Message' required></textarea>
                    <button typeof='submit' className='btn btn-primary'>Send Message</button>
                </form>
           </div>
        </section>
    );
};

export default Contact;