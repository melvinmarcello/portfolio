import {Container, Row, Col} from 'react-bootstrap'
import '../style/about.css'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const About = () => {
  return (
    <section id="about" className='p-5'>
        <Container>
            <Row className='about-section'>
                <Col md={6} className='p-2'>
                    <h4 className='text-uppercase title-content'>About Me</h4>
                    <h2>Web Developer</h2>
                    <p className=''>I am an active student of the Faculty of Computer Science, S1 Informatics study program at National Development University {"Veteran"} Jakarta in 2020 which focuses on web development and cyber security. I have developed several web and mobile app projects. I am able to communicate well, work together in a team, and disciplined in time management.</p>

                </Col>
                <Col md={6} className='p-3 pt-5'>
                    <h4 className='pb-1'>Let{"'"}s Connect</h4>
                    <p className=''>Please follow my social media to get in touch and see the projects and results I have done or if you just want to be friends.</p>
                    <div className="d-flex gap-3 socialMedia-section">
                        <a href="" className='icon-wrapper'>
                            <img src={instagram} alt="" />
                        </a>
                        <a href="" className='icon-wrapper'>
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="" className='icon-wrapper'>
                            <img src={github} alt="" />
                        </a>      
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About