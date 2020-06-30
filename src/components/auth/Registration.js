import React, { useCallback, useState } from "react"
import { withRouter } from "react-router"
import app from "../FirebaseInfo"
import { Link } from "react-router-dom"
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Registration({ history }) {
    const [error, seterror] = useState()
    const handleRegistration = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            localStorage.setItem('loggedEmail', email.value);
            history.push("/home")
        } catch (error) {
            seterror(error)
        }
    }, [history])

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>Registration</h1>
                    <Form onSubmit={handleRegistration} className="mt-4">
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" name="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Créer un compte</Button>
                            </Col>
                        </Form.Group>
                        {
                            error ?
                                <Alert variant="danger">
                                    <Alert.Heading>Error</Alert.Heading>
                                    <p>{error.message}</p>
                                </Alert> :
                                ''
                        }
                        <p>Already have an account? Go to <Link to="/login">Login</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Registration)