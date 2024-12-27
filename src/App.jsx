import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  const shortFormData = [
    "https://youtube.com/shorts/I5PY5iFXW2s?si=t-EiWn1i8AWHxJRG",
    "https://youtube.com/shorts/kEQJc9rk0SA?si=vsyzpburp_yXVYgu",
    "https://youtu.be/R8lKEAutwY0?si=SLOSTNX5TVlKlM2M",
    "https://youtube.com/shorts/cuOdcPInsRM?feature=share",
    "https://youtube.com/shorts/wcX7ql1WYvU?feature=share"
    
  ];

  const longFormData = [
    "https://youtu.be/Kq4asQxpwrI?si=Okci0IULiPPj8r2b",
    "https://youtu.be/8Yj-As3lYIs",
    "https://youtu.be/0hyfQ5sgSX8?si=3jxyZ3UgPcFoyDwg",
    "https://youtu.be/kPbH82jG0x4?si=bc3_rjSbKcZCmGAH"

  ]
  return (
    
        <>
          <Header />
          <Navbar />
          <About />
          <Experience />
          <Projects title={"Short Form Video"} data={shortFormData}/>
          <Projects title={"Long Form Video"} data={longFormData}/>
          <Contact />       
        </>
  
  )
}

export default App