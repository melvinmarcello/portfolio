import {Navbar, Container, Nav } from "react-bootstrap"
import '../style/navigationBar.css'
import { useState } from "react"


const NavigationBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Navbar className={colorChange ? 'navbar-scroll' : ''} variant={colorChange ? 'light' : 'dark'}  collapseOnSelect expand="lg"fixed="top">
      <Container className="py-4">
        <Navbar.Brand href="#home">MM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skill</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavigationBar