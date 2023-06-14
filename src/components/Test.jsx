import { Container, Navbar, Nav } from "react-bootstrap"

const Test = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Test