import React from 'react'
import './index.css'
import Skills from '../../components/Skills'
const AboutPage = () => {
  return (
    <section className='about-container' id='about'>
      <div className="about-left">
        <h1 className='about-title'>About Me</h1>
        <div className="about-text">
          <p>
            I am currently pursuing a Bachelor of Arts in Computer Science and Mathematics at DePauw University, 
            with an expected graduation in May 2025. My passion for technology and problem-solving drove me to enter 
            the CS major.
          </p>
      </div>
    </div>
      <div className="about-right">
        <Skills />
      </div>
    </section>
  )
}

export default AboutPage
