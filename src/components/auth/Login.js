import React, { useCallback, useContext, useState } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../FirebaseInfo"
import { AuthContext } from "../Auth";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Login({ history }) {
    const [error, seterror] = useState()
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                localStorage.setItem('loggedEmail', email.value);
                history.push("/home");
            } catch (error) {
                seterror(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/home" />;
    }

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>Log in</h1>
                    <Form onSubmit={handleLogin} className="mt-4">
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
                                <Button type="submit">Se connecter</Button>
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
                        <p>New Here? Go to <Link to="/registration">Registration</Link> </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(Login);