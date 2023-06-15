import { Container, Row, Col } from "react-bootstrap"
import photo from '../assets/photo.png'
import '../style/main.css'
import pdf from '../utils/CV_Melvin Marcello_2023.pdf'

const Main = () => {
  return (
    <section id="home" className="px-1">
        <Container className="mx-auto">
            <Row className=" mainSection justify-content-center align-items-center">
                <Col md={6} className="mx-auto profileSection">
                    <h3 className="text-white skill mb-3 fstack">Full Stack Developer</h3>
                    <h1 className="name">Melvin <span>Marcello</span></h1>
                    <p className="text-white mb-5">I am an active student of the Faculty of Computer Science, which focuses on web development and cyber security.</p>
                    <a href="#contact" className="contactMe-button">Contact Me</a>
                    <a href={pdf} download='CV_Melvin Marcello_2023.pdf' className="getCv-button">Get My CV</a>
                </Col >
                <Col md={6} className="imageSection text-center">
                    <img src={photo} alt="Melvin Marcello" className="mainImage mx-auto" />
                    <span className="circle-spin"></span>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Main