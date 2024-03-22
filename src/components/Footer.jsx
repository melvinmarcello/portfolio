import '../style/footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'


const Footer = () => {
  return (
    <footer className="footer px-1  py-4">
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col md={4}>
            <h5 className='title-content'>Social</h5>
            <div className="d-flex">

            <a href="https://www.instagram.com/melvinmarcello_" className='icon-wrapper'>
                <img src={instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/melvinmarcello/" className='icon-wrapper'>
                <img src={linkedin} alt="" />
            </a>
            <a href="https://github.com/melvinmarcello" className='icon-wrapper'>
                <img src={github} alt="" />
            </a>      
            </div>
          </Col>
          <Col md={4}>                        
            <p className='text-center fw-bold'>melvinmarcello2978@gmail.com</p>
          </Col>
          <Col md={4}>
            <h6 className='text-center text-secondary'>&copy; 2024 Melvin Marcello</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer