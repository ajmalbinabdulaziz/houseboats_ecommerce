import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <Container>
            <Row>
                <Col className="py-5">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>Triveni</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeScreen
