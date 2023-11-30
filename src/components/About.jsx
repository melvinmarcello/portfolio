import {Container, Row, Col} from 'react-bootstrap'
import '../style/about.css'

const About = () => {
  return (
    <section id="about" className='p-5'>
        <Container>
            <Row className='about-section'>
                <h4 className='text-uppercase title-content'>About Me</h4>
                <h2>Web Developer</h2>
                <Col md={6} className='p-2 px-3'>
                    <p className=''>I am an active student of the Faculty of Computer Science, S1 Informatics study program at National Development University {'"Veteran"'} Jakarta in 2020 which focuses on web development and cyber security. I have developed several web and mobile app projects. I am able to communicate well, work together in a team, and disciplined in time management.
                    As an IT Programmer, I specialize in the development of robust and efficient systems, with expertise in Laravel and Javascript. My internship experience has been diverse, involving the creation of an Asset Management System that optimizes resource allocation, a dynamic company portfolio website showcasing cutting-edge technologies, and a comprehensive Data Management System for streamlined information handling.
                </p>

                </Col>
                <Col md={6} className='p-2 px-3'>
                    <p className=''>On the other hand, as an IT Support intern, I{"'"}ve gained hands-on experience in installing and configuring workstation software and hardware. Passionate about leveraging technology to drive innovation, I am an IT professional with a focus on programming. With a solid foundation in website development, I have honed my skills through hands-on experience in developing impactful solutions. My career journey has seen me contribute to the creation of an efficient Asset Management System, a dynamic company portfolio website, and a comprehensive Data Management System. 
</p>                    
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About