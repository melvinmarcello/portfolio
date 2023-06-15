import '../style/footer.css'
import { Container, Row, Col } from 'react-bootstrap'



const Footer = () => {
  return (
    <footer className="footer px-1  py-4">
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col md={6}>
            <h5 className='title-content'>About Me</h5>
            <p>I am an active student of the Faculty of Computer Science, which focuses on web development and cyber security.</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled d-flex gap-3">
                <li><a href="#home">Home</a> </li>
                <li><a href="#skills">Skill</a></li>
                <li><a href="#project">Project</a> </li>
                <li><a href="#contact">Contact</a> </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>&copy; 2023 Melvin Marcello</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer