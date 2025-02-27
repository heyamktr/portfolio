import React from 'react'
import './index.css'
import { Col, Row, Container, Button } from 'react-bootstrap' 
import myResume from '../../../src/assets/Resume.pdf'
import Huy from '../../assets/Huy_rmbg.png'

const HomePage = () => {
  return (
    <section className='home-page-container' id='home'>
      <div className="home-left">
        <div className="home-text">
          <div className='home-intro'>Hi, my name is</div>
          <div className='home-name'>Henry Phung</div>
          <div className='home-title'>
          <a href={myResume} download={myResume}>
            <Button size="lg" variant="outline-light" className='resume-button'>
              My Resume
            </Button>
          </a>
          </div>
          <h2 className='home-job'>I am a
            <div className="home-words">
              <span> Fullstack Developer</span>
              <span> Leetcode Enthusiast</span>
              <span> Competitive Programmer</span>
            </div>
          </h2>
        </div>
      </div>

      <div className="home-right">
        <img src={Huy} alt="Henry Phung" />
        {/* <Skills /> */}
      </div>
      {/* <div className="a">
        <h1>under col row</h1>
      </div> */}
      {/* <div className="home-image">
        <h1>Home image goes here</h1>
      </div> */}
    </section>
  )
}

export default HomePage
