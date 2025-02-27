import React from 'react'
import './index.css'
import { Button, Card, Container } from 'react-bootstrap'
import huyVideo from '../../assets/projects/huy.mp4'
import finbud from '../../assets/projects/finbud.png'
import musicApp from '../../assets/projects/music-app.png'
import businessCard from '../../assets/projects/bussiness-card.png'
import chatBox from '../../assets/projects/chat-box.png'
import NoteScribe from '../../assets/projects/notescribe.png'

const ProjectPage = () => {
  const projects = [
    {
      title: 'NoteScribe',
      subtitle: 'Financial website',
      description: `DePauw NoteScribe is a senior project web application that transcribes and translates MP3 audio files 
                    and enhances accessibility for academic environments`,
      source: NoteScribe,
      live: 'https://notetranscribe.vercel.app/',
      github: 'https://github.com/hphng/NoteScribe'
    },
    {
      title: 'Finbud',
      subtitle: 'Financial website',
      description: `A fullstack website that helps users to manage their stock and finance.
                    Built with Vue.js, Node.js, Express.js, and MongoDB. The website allows users to create an account, 
                    add stocks to their watchlist, and view the stock's information.`,
      source: finbud,
      live: 'https://finbud.pro/',
      github: 'https://github.com/finbud2024/Finbud'
    },
    {
      title: 'Melify',
      subtitle: 'Music app',
      description: `A fullstack music app using spotify API with React.js and Node 
                    that allows users to listen to music and view the lyrics of the songs. It is also 
                    integrated with AI to recommend songs based on the user's mood and history.`,
      source: musicApp,
      live: 'https://melify-app.netlify.app/',
      github: 'https://github.com/SWE1dePauwMusic/music_app'
    },
    {
      title: 'Box Chat',
      subtitle: 'Chat application',
      description: `A chat application that allows users to create a chat room and chat with their friends. 
                    The app allows users to create an account, create a chat room, 
                    and chat with their friends in real-time.`,
      source: chatBox,
      live: null,
      github: 'https://github.com/hphng/box_chat'
    },
    {
      title: 'Business Card',
      subtitle: 'A business card demo',
      description: `A simple business card demo that built with React.js and allows toggle dark - light theme. 
                    This project is a simple business card to show user's information. 
                    The purpose of this project is to learn React.js and to deploy on Netlify.`,
      source: businessCard,
      live: 'https://huyphung-bussiness-card.netlify.app/',
      github: 'https://github.com/hphng/bussiness-card',
    },
    {
      title: 'AsciiCam',
      subtitle: 'A Camera prototype project',
      description: `A camera testing project that allows users to take a photo and convert it to ASCII art. 
                    The app is built with HTML, CSS, p5.js and uses the camera to stream video. 
                    The photo is then converted to ASCII art using the ASCII art API.`,
      source: huyVideo,
      live: null,
      github: 'https://github.com/hphng/AsciiCam'
    }
  ]
  let id = 1;
  return (
    <section className='project-container' id="projects">
      <header className='project-header'>Projects</header>
      {projects.map((project) => {
        const isVideo = project.source.includes('.mp4');
        return (
          (
            <div className="project" key={id++}>
              <a className="project-showcase"
                href={project.live ? project.live : project.github}
              >
                <div className="project-image-container">
                  {
                    isVideo ? (
                      <video className="project-image" src={project.source} controls ></video>
                    ) : (
                      <img className="project-image" src={project.source} alt="project-image" />
                    )
                  }
                </div>
              </a>

              <Card className="project-info">
                <Card.Body>
                  <Card.Title className='project-title'>{project.title}</Card.Title>
                  <Card.Subtitle className="project-subtitle">{project.subtitle}</Card.Subtitle>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <Button
                    disabled={project.live === 'NULL'}
                    href={project.live}
                    className='btn-danger project-button project-live'
                    target='_blank'
                  >
                    Live
                  </Button>
                  <Button href={project.github} target="_blank" className='btn-primary project-button project-github'>Learn more</Button>
                </Card.Body>
              </Card>
            </div>
          )
        )
      })}
    </section>
  )
}

export default ProjectPage
