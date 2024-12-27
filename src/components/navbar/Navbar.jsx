import React from 'react'
import './navbar.css'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  const [activNav,setActivNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={()=> setActivNav('#')}className={activNav=== '#' ?'active': ''}><IoMdHome /></a>
      <a href='#about' onClick={()=> setActivNav('#about')} className={activNav=== '#about' ?'active': ''}><FaUser /></a>
      <a href='#experience' onClick={()=> setActivNav('#experience')} className={activNav=== '#experience' ?'active': ''}><FaBookmark /></a>
      <a href='#projects' onClick={()=> setActivNav('#projects')} className={activNav=== '#projects' ?'active': ''}><MdWork /></a>
      <a href='#contact' onClick={()=> setActivNav('#contact')} className={activNav=== '#contact' ?'active': ''}><BiMessage /></a>
      
      
    </nav>
  )
}

export default Navbar