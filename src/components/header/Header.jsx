import React from 'react'
import './header.css'
import CTA from './CTA'
import image from '../../Assets/DSC_0054.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Farhan Anwar</h1>
        <h3 className='text-light'> Video Editor</h3>
        <CTA/>

        <div className='me'>
          <img  src={image} alt='me'/>
        </div>

      </div>
    </header>
  )
}

export default Header