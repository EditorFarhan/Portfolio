import React from 'react'
import { useState, useEffect } from "react";
import './projects.css'
import ReactPlayer from 'react-player/youtube'

const Projects = ({title,data}) => {
 

  // const [currentImage, setCurrentImage] = useState(0);
  // const handlePrevious = () => {
  //   setCurrentImage(!currentImage ? data.length - 1 : currentImage - 1);
  // };
  // const handleNext = () => {
  //   setCurrentImage((currentImage + 1) % data.length);
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleNext();
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [currentImage]);
  return (

    <section id='projects'>
      
        <h2>{title}</h2>
        <div className='projects__container'>
        
        
        {data.map((image, index) => (
          <ReactPlayer url = {image}  />
        ))}
        
        </div>
      
      </section>
  );
}

export default Projects