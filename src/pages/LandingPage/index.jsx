import React from 'react'
import Particles from "@tsparticles/react";
import './index.css'
import { landingPageParticles } from "../../utils/tsParticlesOptions";
import { Button } from 'react-bootstrap'

const LandingPage = () => {
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className='landing-page'>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={landingPageParticles}
      />
      <div className="introduction">
        <h1>Welcome to my portfolio!</h1>
        <Button className='btn btn-outline-danger' href="#home">
          View my works
        </Button>
      </div>
    </section>
  )
}

export default LandingPage
