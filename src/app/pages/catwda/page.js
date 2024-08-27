'use client'
import { useFormContext } from "@/app/context/FormContext";
import NavBar from '@/app/components/NavBar';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Catwda() {
    const { formData } = useFormContext();

    return (
        <>
            <NavBar />
            <Container className="py-4">
                <div className="bg-secondary mb-5 py-4 text-center">
                    <div className="card-body">
                        <h1 className='fw-bolder'>Análisis CATWDA</h1>
                        <p className="m-0">
                            {formData.title}
                        </p>
                    </div>
                </div>

                <Row className="g-4">
                    <Col md={4}>
                        <Card bg="primary" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/catwda/clientes.jpeg" />
                            <Card.Body>
                                <Card.Title>Clientes</Card.Title>
                                <Card.Text>
                                    Partes interesadas en la decisión
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.stakeholders.map((stakeholder, idx) => (
                                    <ListGroup.Item variant="primary" key={idx}>{stakeholder}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="danger" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/catwda/actores.jpeg" />
                            <Card.Body>
                                <Card.Title>Actores</Card.Title>
                                <Card.Text>
                                    Personas que toman decisiones
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.causes.map((cause, idx) => (
                                    (cause[1] === 'Mano de obra' || cause[1] === 'Maquinaria') && <ListGroup.Item variant="danger" key={idx}>{cause[0]}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="success" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/catwda/transformacion.jpeg" />
                            <Card.Body>
                                <Card.Title>Transformaciones</Card.Title>
                                <Card.Text>
                                    Cambios que se producen
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.causes.map((cause, idx) => (
                                    (cause[1] === 'Materiales' || cause[1] === 'Método') && <ListGroup.Item variant="success" key={idx}>{cause[0]}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="warning" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/catwda/weltanschaung.jpeg" />
                            <Card.Body>
                                <Card.Title>Weltanschaung</Card.Title>
                                <Card.Text>
                                    Visión
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="warning">{formData.objective}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="info" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/catwda/duenos.jpeg" />
                            <Card.Body>
                                <Card.Title>Dueños</Card.Title>
                                <Card.Text>
                                    Personas responsables
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.owners.map((owner, idx) => (
                                    <ListGroup.Item variant="info" key={idx}>{owner}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="dark" text="white" className="mb-3">
                            <Card.Img variant="top" src="/imgs/catwda/ambiente.jpeg" />
                            <Card.Body>
                                <Card.Title>Ambiente</Card.Title>
                                <Card.Text>
                                    Contexto
                                </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                                {formData.opportunities.map((oportunity, idx) => (
                                    <ListGroup.Item variant="dark" key={idx}>{oportunity}</ListGroup.Item>
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

export default Catwda;