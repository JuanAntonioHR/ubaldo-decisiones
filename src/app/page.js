'use client';
import { Container, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [strengths, setStrengths] = useState(['']);
  const [weaknesses, setWeaknesses] = useState(['']);
  const [opportunities, setOpportunities] = useState(['']);
  const [threats, setThreats] = useState(['']);
  const [stakeholders, setStakeholders] = useState(['']);
  const [causes, setCauses] = useState(['']);
  const [dataPoints, setDataPoints] = useState([{ description: '', value: '' }]);
  const [focusAreas, setFocusAreas] = useState(['']);
  const [evaluationOptions, setEvaluationOptions] = useState(['']);

  const handleArrayChange = (index, value, setter, state) => {
    const updatedArray = [...state];
    updatedArray[index] = value;
    setter(updatedArray);
  };

  const handleAddField = (setter, state, newItem) => {
    setter([...state, newItem]);
  };

  const handleRemoveField = (index, setter, state) => {
    const updatedArray = state.filter((_, i) => i !== index);
    setter(updatedArray);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-shrink-0">
        <section className="py-5">
          <Container>
            {/* Form */}
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
              <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h1 className="fw-bolder">Graficador de desiciones</h1>
                <p className="lead fw-normal text-muted mb-0">Rellene los siguientes campos para obtener una vista gráfica de su desición</p>
              </div>
              <Row className="gx-5 justify-content-center">
                <Col lg={8} xl={6}>
                  <Form id="contactForm">
                    {/* Nombre del Proyecto/Problema */}
                    <Form.Group className="mb-3" controlId="title">
                      <Form.Label>Dale un nombre a tu problema</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa el nombre del problema ..." required
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    {/* Descripción del Proyecto/Problema */}
                    <Form.Group className="mb-3" controlId="description">
                      <Form.Label>Descripción del problema</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Describe el problema ..." required
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>

                    {/* Objetivo Principal */}
                    <Form.Group className="mb-3" controlId="objective">
                      <Form.Label>Objetivo Principal</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa el objetivo ..." required
                        value={objective} onChange={(e) => setObjective(e.target.value)} />
                    </Form.Group>

                    {/* Factores Internos (Fortalezas y Debilidades) */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="d-grid mb-3" controlId="strengths">
                          <Form.Label>Fortalezas</Form.Label>
                          {strengths.map((strength, index) => (
                            <InputGroup className="mb-2" key={index}>
                              <Form.Control 
                                type="text"
                                value={strength} 
                                onChange={(e) => handleArrayChange(index, e.target.value, setStrengths, strengths)} 
                                required
                              />
                              <Button variant="danger" onClick={() => handleRemoveField(index, setStrengths, strengths)} disabled={strengths.length === 1} size="sm" className="d-flex">
                                <i className="material-icons">delete</i>
                              </Button>
                            </InputGroup>
                          ))}
                          <Button variant="success" onClick={() => handleAddField(setStrengths, strengths, '')} size="sm" className="mb-3 d-flex justify-content-center">
                            <i className="material-icons">add</i>
                          </Button>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="d-grid mb-3" controlId="weaknesses">
                          <Form.Label>Debilidades</Form.Label>
                          {weaknesses.map((weakness, index) => (
                            <InputGroup className="mb-2" key={index}>
                              <Form.Control 
                                type="text"
                                value={weakness} 
                                onChange={(e) => handleArrayChange(index, e.target.value, setWeaknesses, weaknesses)}
                                required
                              />
                              <Button variant="danger" onClick={() => handleRemoveField(index, setWeaknesses, weaknesses)} disabled={weaknesses.length === 1} size="sm" className="d-flex">
                                <i className="material-icons">delete</i>
                              </Button>
                            </InputGroup>
                          ))}
                          <Button variant="success" onClick={() => handleAddField(setWeaknesses, weaknesses, '')} size="sm" className="mb-3 d-flex justify-content-center">
                            <i className="material-icons">add</i>
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Factores Externos (Oportunidades y Amenazas) */}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="d-grid mb-3" controlId="opportunities">
                          <Form.Label>Oportunidades</Form.Label>
                          {opportunities.map((opportunity, index) => (
                            <InputGroup className="mb-2" key={index}>
                              <Form.Control 
                                type="text"
                                value={opportunity} 
                                onChange={(e) => handleArrayChange(index, e.target.value, setOpportunities, opportunities)}
                                required
                              />
                              <Button variant="danger" onClick={() => handleRemoveField(index, setOpportunities, opportunities)} disabled={opportunities.length === 1} size="sm" className="d-flex">
                                <i className="material-icons">delete</i>
                              </Button>
                            </InputGroup>
                          ))}
                          <Button variant="success" onClick={() => handleAddField(setOpportunities, opportunities, '')} size="sm" className="mb-3 d-flex justify-content-center">
                            <i className="material-icons">add</i>
                          </Button>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="d-grid mb-3" controlId="threats">
                          <Form.Label>Amenazas</Form.Label>
                          {threats.map((threat, index) => (
                            <InputGroup className="mb-2" key={index}>
                              <Form.Control 
                                type="text"
                                value={threat} 
                                onChange={(e) => handleArrayChange(index, e.target.value, setThreats, threats)}
                                required
                              />
                              <Button variant="danger" onClick={() => handleRemoveField(index, setThreats, threats)} disabled={threats.length === 1} size="sm" className="d-flex">
                                <i className="material-icons">delete</i>
                              </Button>
                            </InputGroup>
                          ))}
                          <Button variant="success" onClick={() => handleAddField(setThreats, threats, '')} size="sm" className="mb-3 d-flex justify-content-center">
                            <i className="material-icons">add</i>
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Partes Interesadas */}
                    <Form.Group className="mb-3" controlId="stakeholders">
                      <Button variant="success" onClick={() => handleAddField(setStakeholders, stakeholders, '')} size="sm" className="mb-3 d-flex float-end">
                        <i className="material-icons">add</i>
                      </Button>
                      <Form.Label>Partes Interesadas</Form.Label>
                      {stakeholders.map((stakeholder, index) => (
                        <InputGroup className="mb-2" key={index}>
                          <Form.Control 
                            type="text"
                            value={stakeholder} 
                            onChange={(e) => handleArrayChange(index, e.target.value, setStakeholders, stakeholders)}
                            required
                          />
                          <Button variant="danger" onClick={() => handleRemoveField(index, setStakeholders, stakeholders)} disabled={stakeholders.length === 1} size="sm" className="d-flex">
                            <i className="material-icons">delete</i>
                          </Button>
                        </InputGroup>
                      ))}
                    </Form.Group>

                    {/* Posibles Causas del Problema */}
                    <Form.Group className="mb-3" controlId="causes">
                      <Button variant="success" onClick={() => handleAddField(setCauses, causes, '')} size="sm" className="mb-3 d-flex float-end">
                        <i className="material-icons">add</i>
                      </Button>
                      <Form.Label>Posibles Causas del Problema</Form.Label>
                      {causes.map((cause, index) => (
                        <InputGroup className="mb-2" key={index}>
                          <Form.Control 
                            type="text"
                            value={cause} 
                            onChange={(e) => handleArrayChange(index, e.target.value, setCauses, causes)}
                            required
                          />
                          <Button variant="danger" onClick={() => handleRemoveField(index, setCauses, causes)} disabled={causes.length === 1} size="sm" className="d-flex">
                            <i className="material-icons">delete</i>
                          </Button>
                        </InputGroup>
                      ))}
                    </Form.Group>

                    {/* Datos (Resultados Numéricos u Observaciones) */}
                    <Form.Group className="mb-3" controlId='dataPoints'>
                      <Button variant="success" onClick={() => handleAddField(setDataPoints, dataPoints, { description: '', value: '' })} size="sm" className="mb-3 d-flex float-end">
                        <i className="material-icons">add</i>
                      </Button>
                      <Form.Label>Datos Cuantitativos</Form.Label>
                      {dataPoints.map((dataPoint, index) => (
                        <InputGroup className="mb-2" key={index}>
                          <Form.Control
                            type="text"
                            placeholder="Descripción del dato"
                            required
                            value={dataPoint.description}
                            onChange={(e) =>
                            handleArrayChange(index, { ...dataPoint, description: e.target.value }, setDataPoints, dataPoints)}
                          />
                          <Form.Control
                            type="number"
                            placeholder="Valor"
                            required
                            value={dataPoint.value}
                            onChange={(e) => handleArrayChange(index, { ...dataPoint, value: e.target.value }, setDataPoints, dataPoints)}
                          />
                          <Button
                            variant="danger"
                            onClick={() => handleRemoveField(index, setDataPoints, dataPoints)}
                            disabled={dataPoints.length === 1}
                            size="sm"
                          />
                        </InputGroup>
                      ))}
                    </Form.Group>

                    {/* Áreas de Enfoque */}
                    <Form.Group className="mb-3" controlId="focusAreas">
                      <Button variant="success" onClick={() => handleAddField(setFocusAreas, focusAreas, '')} size="sm" className="mb-3 d-flex float-end">
                        <i className="material-icons">add</i>
                      </Button>
                      <Form.Label>Áreas de Enfoque</Form.Label>
                      {focusAreas.map((focusArea, index) => (
                        <InputGroup className="mb-2" key={index}>
                          <Form.Control
                            type="text"
                            value={focusArea}
                            onChange={(e) => handleArrayChange(index, e.target.value, setFocusAreas, focusAreas)}
                            required
                          />
                          <Button
                            variant="danger"
                            onClick={() => handleRemoveField(index, setFocusAreas, focusAreas)}
                            disabled={focusAreas.length === 1}
                            size="sm"
                            className="d-flex"
                          >
                            <i className="material-icons">delete</i>
                          </Button>
                        </InputGroup>
                      ))}
                    </Form.Group>

                    {/* Opciones de Evaluación */}
                    <Form.Group className="mb-3" controlId="evaluationOptions">
                      <Button variant="success" onClick={() => handleAddField(setEvaluationOptions, evaluationOptions, '')} size="sm" className="mb-3 d-flex float-end">
                        <i className="material-icons">add</i>
                      </Button>
                      <Form.Label>Opciones de Evaluación</Form.Label>
                      {evaluationOptions.map((evaluationOption, index) => (
                        <InputGroup className="mb-2" key={index}>
                          <Form.Control
                            type="text"
                            value={evaluationOption}
                            onChange={(e) => handleArrayChange(index, e.target.value, setEvaluationOptions, evaluationOptions)}
                            required
                          />
                          <Button
                            variant="danger"
                            onClick={() => handleRemoveField(index, setEvaluationOptions, evaluationOptions)}
                            disabled={evaluationOptions.length === 1}
                            size="sm"
                            className="d-flex"
                          >
                            <i className="material-icons">delete</i>
                          </Button>
                        </InputGroup>
                      ))}
                    </Form.Group>

                    {/* Submit Button */}
                    <div className="d-grid mt-4">
                      <Button variant="primary" size="lg" type="submit">Continuar</Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default QuestionForm;
