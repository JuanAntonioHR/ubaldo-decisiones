'use client'
import { useFormContext } from "@/app/context/FormContext";
import { useRouter } from 'next/navigation'
import NavBar from '@/app/components/NavBar';
import { Container } from 'react-bootstrap';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

function Sombreros() {
    const { formData } = useFormContext();
    const router = useRouter();

    return (
      <>
        <NavBar />
        <Container className="py-4">
            <div className="bg-secondary mb-5 py-4 text-center">
                <div className="card-body">
                    <h1 className='fw-bolder'>Sombreros de pensamiento</h1>
                    <p className="m-0">
                        {formData.title}
                    </p>
                </div>
            </div>
            <Row className="g-4">
                    <Col md={4}>
                        <Card bg="light" className="mb-3">
                            <Card.Img variant="top" src="/imgs/sombreros/blanco.jpeg" />
                            <Card.Body>
                                <Card.Title>Sombrero blanco</Card.Title>
                                <Card.Text>
                                    Hechos
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="light">{formData.description}</ListGroup.Item>
                                {formData.dataPoints.map((data, idx) => (
                                    <ListGroup.Item variant="light" key={idx}>{data.description}: {data.value}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="danger" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/sombreros/rojo.jpeg" />
                            <Card.Body>
                                <Card.Title>Sombrero rojo</Card.Title>
                                <Card.Text>
                                    Emociones
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.feelings.map((feeling, idx) => (
                                    <ListGroup.Item variant="danger" key={idx}>{feeling}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="success" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/sombreros/verde.jpeg" />
                            <Card.Body>
                                <Card.Title>Sombrero verde</Card.Title>
                                <Card.Text>
                                    Creatividad
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.evaluationOptions.map((option, idx) => (
                                    <ListGroup.Item variant="success" key={idx}>{option}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="warning" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/sombreros/amarillo.jpeg" />
                            <Card.Body>
                                <Card.Title>Sombrero amarillo</Card.Title>
                                <Card.Text>
                                    Positividad
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.strengths.map((strength, idx) => (
                                    <ListGroup.Item variant="warning" key={idx}>{strength}</ListGroup.Item>
                                ))}
                                {formData.opportunities.map((opportunity, idx) => (
                                    <ListGroup.Item variant="warning" key={idx}>{opportunity}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card border="primary" className="mb-3">
                            <Card.Img variant="top" src="/imgs/sombreros/azul.jpeg" />
                            <Card.Body>
                                <Card.Title>Sombrero azul</Card.Title>
                                <Card.Text>
                                    Análisis
                                </Card.Text>
                            </Card.Body>
                            <Card.Body variant="flush">
                                {/* Links a los demás diagramas */}
                                <Card.Link onClick={() => {router.push('pareto')}}>Diagrama de Pareto</Card.Link>
                                <Card.Link onClick={() => {router.push('foda')}}>Análisis FODA</Card.Link>
                                <Card.Link onClick={() => {router.push('catwda')}}>Análisis CATWDA</Card.Link>
                                <Card.Link onClick={() => {router.push('ishikawa')}}>Diagrama de Ishikawa</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="dark" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/sombreros/negro.jpeg" />
                            <Card.Body>
                                <Card.Title>Sombrero negro</Card.Title>
                                <Card.Text>
                                    Juicio
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.weaknesses.map((weakness, idx) => (
                                    <ListGroup.Item variant="dark" key={idx}>{weakness}</ListGroup.Item>
                                ))}
                                {formData.threats.map((threat, idx) => (
                                    <ListGroup.Item variant="dark" key={idx}>{threat}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
        </Container>
      </>
    );
}

export default Sombreros;