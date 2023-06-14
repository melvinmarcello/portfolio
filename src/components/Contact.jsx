import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../style/contact.css'

const Contact = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxac9yFPaytTxvZ0_Zll7eMB2hwyYKvmE_yEGllGW6gUjxKaX6-cooK_7lO6_rPQWk12w/exec'
    
    const handleSubmit =(e) =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    }


    return (
        <>
        <section id="contact" className='py-5'>
        <Container>
        <h1 className='title-content text-uppercase text-center mb-5'>Contact Me</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>                    
                    <Form.Control as="textarea" placeholder="Leave a Messages here" />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} className="send-button me-3">Send</Button>
            </Form>
        </Container>
       </section>
        
        </>
       
)
}
export default Contact;