import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Welcome(props) {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>Welcome</h1>
                    <Link to="/login">Login</Link> | 
                    <Link to="/registration"> Registration</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Welcome;