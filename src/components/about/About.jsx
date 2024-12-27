import React from 'react'
import './about.css'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";
import image from '../../Assets/DSC_0325.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={image} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>
            <MdOutlineFolderSpecial className='about__icon'/>
              <h5>Delivered Videos</h5>
              <small>100+</small>
            </article>
          </div>
          <p>
          Everyone's creating videos these days, but crafting one that truly captivates an audience requires time, effort, and consistency. That's where my expertise comes into play!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About