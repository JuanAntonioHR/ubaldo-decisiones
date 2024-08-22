'use client'
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const DecisionFormPage = () => {
  const [formData, setFormData] = useState({
    problemDescription: '',
    internalFactors: '',
    externalFactors: '',
    keyActors: '',
    causes: '',
    quantitativeData: '',
    thinkingPerspectives: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Aquí puedes procesar los datos para generar los diagramas y listas.
  };

  return (
    <Container>
      <h1 className="mt-4">Herramienta para la Toma de Decisiones</h1>
      <Form onSubmit={handleSubmit}>
        
        {/* Sección 1: Definición del Problema */}
        <Form.Group controlId="problemDescription">
          <Form.Label>Descripción del Problema</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Sección 2: Identificación de Factores Internos y Externos */}
        <Row>
          <Col>
            <Form.Group controlId="internalFactors">
              <Form.Label>Factores Internos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="internalFactors"
                value={formData.internalFactors}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="externalFactors">
              <Form.Label>Factores Externos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="externalFactors"
                value={formData.externalFactors}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Sección 3: Actores y Sistemas */}
        <Form.Group controlId="keyActors">
          <Form.Label>Actores Clave</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="keyActors"
            value={formData.keyActors}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Sección 4: Causas y Efectos */}
        <Form.Group controlId="causes">
          <Form.Label>Principales Causas del Problema</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="causes"
            value={formData.causes}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Sección 5: Datos y Prioridades */}
        <Form.Group controlId="quantitativeData">
          <Form.Label>Datos Cuantitativos o Cualitativos</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="quantitativeData"
            value={formData.quantitativeData}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Sección 6: Sombreros del Pensamiento */}
        <Form.Group controlId="thinkingPerspectives">
          <Form.Label>Perspectivas de Pensamiento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="thinkingPerspectives"
            value={formData.thinkingPerspectives}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default DecisionFormPage;
