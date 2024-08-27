'use client';
import { useFormContext } from "@/app/context/FormContext";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import NavBar from '@/app/components/NavBar';

function Foda() {
    const { formData } = useFormContext();

    return(
        <>
            <NavBar />
            <Container className="py-4">
                <div className="bg-secondary mb-5 py-4 text-center">
                    <div className="card-body">
                        <h1 className='fw-bolder'>Análisis FODA</h1>
                        <p className="m-0">
                            {formData.title}
                        </p>
                    </div>
                </div>
                <Row xs={1} md={2} className="g-4 g-lg-5">
                    <Col>
                        <Card border="primary">
                            <Card.Img variant="top" src="/imgs/foda/fortalezas.jpeg" />
                            <Card.Body>
                                <Card.Title>Fortalezas</Card.Title>
                                <Card.Text>
                                    Fortalezas de la decisión
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.strengths.map((strength, idx) => (
                                    <ListGroup.Item key={idx}>{strength}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="danger">
                            <Card.Img variant="top" src="/imgs/foda/debilidades.jpeg" />
                            <Card.Body>
                                <Card.Title>Debilidades</Card.Title>
                                <Card.Text>
                                    Debilidades de la decisión
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.weaknesses.map((weakness, idx) => (
                                    <ListGroup.Item key={idx}>{weakness}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success">
                            <Card.Img variant="top" src="/imgs/foda/oportunidades.jpeg" />
                            <Card.Body>
                                <Card.Title>Oportunidades</Card.Title>
                                <Card.Text>
                                    Oportunidades de la decisión
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.opportunities.map((opportunity, idx) => (
                                    <ListGroup.Item key={idx}>{opportunity}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="warning">
                            <Card.Img variant="top" src="/imgs/foda/amenazas.jpeg" />
                            <Card.Body>
                                <Card.Title>Amenazas</Card.Title>
                                <Card.Text>
                                    Amenazas de la decisión
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.threats.map((threat, idx) => (
                                    <ListGroup.Item key={idx}>{threat}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Foda;