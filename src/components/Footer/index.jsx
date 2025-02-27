import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer className='footer-container bg-dark'>
      <Button href="#home" variant='danger'>
          <FontAwesomeIcon icon={faChevronUp} />
      </Button>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/huyphung2025/" target='_blank'>
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href="mailto:huyphung3103@gmail.com">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
        <a href="https://github.com/hphng" target='_blank'>
            <FontAwesomeIcon className="icon" icon={faSquareGithub} />
        </a>
      </div>
      <p>Henry Phung - © 2024</p>
    </footer>
  )
}

export default Footer
