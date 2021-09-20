import Form from "react-bootstrap/Form";
import swal from 'sweetalert';
import CreateForm from "../ListTools/Form";
import { Container, Row, Col, Card } from "react-bootstrap";

function formTools() {

    return (

        <Container className="d-flex p-5">
           <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </Form> 
        </Container>
       
        

    )
}

export default formTools;


