import React from 'react'
import app from "../FirebaseInfo"
import { Container, Row, Col } from 'react-bootstrap';

function Home(props) {
    const onClickHandler = () => {
        localStorage.removeItem('loggedEmail');
        app.auth().signOut()
    }
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>Welcome {localStorage.getItem('loggedEmail')}</h1>
                    <button className="btn btn-danger" onClick={onClickHandler}>Log out</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home