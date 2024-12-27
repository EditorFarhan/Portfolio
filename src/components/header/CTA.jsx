import React from 'react'
import resume_farhan from '../../Assets/resume_farhan.PDF'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume_farhan} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA