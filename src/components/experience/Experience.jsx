import React from 'react'
import './experience.css'
import { FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='cotainer experience__container'>
        <div className='experience__cards'>
          <h3>Video Editing</h3>
          <div className='experience_content'>
            <article className='experience__details'>
              <FaCircleCheck className='experience__details-icon' />
            <div>
            <h4>Adobe Premiere Pro</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaCircleCheck className='experience__details-icon' />
            <div>
            <h4>Sound Designing & Transitions</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaCircleCheck className='experience__details-icon' />
            <div>
            <h4>3d Animations & Motion Graphics</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaCircleCheck className='experience__details-icon' />
            <div>
            <h4>Color Grading</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experience