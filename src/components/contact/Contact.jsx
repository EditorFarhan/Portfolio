import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4rn48lv', 'template_69zhhwr', form.current,  {
        publicKey: 'IGn4gLbcUDne7W4sq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>editorfarhan007@gmail.com</h5>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8789691394</h5>
            connect over phone
          </article>
          <article className='contact__option'>
            <FaSquareInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>editor_farhan7</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name= 'name' placeholder='Enter your name' required/>
          <input type="email" name= 'email' placeholder='Your Email' required/>
          <textarea name='message' rows='5' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact