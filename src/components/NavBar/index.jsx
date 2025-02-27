import React from 'react'
import './index.css'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg" className="justify-content-end bg-dark" data-bs-theme="dark">
        <Navbar.Brand className="name me-auto" href="#home">Henry Phung</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-link">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
