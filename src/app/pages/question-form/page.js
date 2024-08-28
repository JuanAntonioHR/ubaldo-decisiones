'use client';
import { useFormContext } from '@/app/context/FormContext';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import FieldArray from '@/app/components/FieldArray';

function QuestionForm() {
  const router = useRouter();
  const { formData, setFormData } = useFormContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [strengths, setStrengths] = useState(['']);
  const [weaknesses, setWeaknesses] = useState(['']);
  const [opportunities, setOpportunities] = useState(['']);
  const [threats, setThreats] = useState(['']);
  const [stakeholders, setStakeholders] = useState(['']);
  const [owners, setOwners] = useState(['']);
  const [causes, setCauses] = useState(['']);
  const [dataPoints, setDataPoints] = useState([{ description: '', value: '' }]);
  const [evaluationOptions, setEvaluationOptions] = useState(['']);
  const [feelings, setFeelings] = useState(['']);

  const handleSubmit = (e) => {
    // dont proceed if the form is empty
    if (!title || !description || !objective || !strengths[0] || !weaknesses[0] || !opportunities[0] || !threats[0] || !stakeholders[0] || !owners[0] || !causes[0] || !dataPoints[0].description || !dataPoints[0].value || !evaluationOptions[0] || !feelings[0]) {
      return;
    }

    e.preventDefault();

    setFormData({
      title,
      description,
      objective,
      strengths,
      weaknesses,
      opportunities,
      threats,
      stakeholders,
      owners,
      causes,
      dataPoints,
      evaluationOptions,
      feelings,
    });

    router.push('/pages/home');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-shrink-0">
        <section className="py-5">
          <Container>
            <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
              <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h1 className="fw-bolder">Graficador de desiciones</h1>
                <p className="lead fw-normal text-muted mb-0">
                  Rellene los siguientes campos para obtener una vista gráfica de su desición
                </p>
              </div>
              <Row className="gx-5 justify-content-center">
                <Col lg={8} xl={6}>
                  <Form id="contactForm">
                    <Form.Group className="mb-3" controlId="title">
                      <Form.Label>Dale un nombre a tu problema</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa el nombre del problema ..."
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                      <Form.Label>Descripción del problema</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Describe el problema ..."
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="objective">
                      <Form.Label>Objetivo Principal</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa el objetivo ..."
                        required
                        value={objective}
                        onChange={(e) => setObjective(e.target.value)}
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <FieldArray
                          label="Fortalezas"
                          items={strengths}
                          setItems={setStrengths}
                          placeholder="Ingresa una fortaleza"
                        />
                      </Col>
                      <Col md={6}>
                        <FieldArray
                          label="Debilidades"
                          items={weaknesses}
                          setItems={setWeaknesses}
                          placeholder="Ingresa una debilidad"
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FieldArray
                          label="Oportunidades"
                          items={opportunities}
                          setItems={setOpportunities}
                          placeholder="Ingresa una oportunidad"
                        />
                      </Col>
                      <Col md={6}>
                        <FieldArray
                          label="Amenazas"
                          items={threats}
                          setItems={setThreats}
                          placeholder="Ingresa una amenaza"
                        />
                      </Col>
                    </Row>

                    <FieldArray
                      label="Partes Interesadas"
                      items={stakeholders}
                      setItems={setStakeholders}
                      placeholder="Ingresa una parte interesada"
                    />

                    <FieldArray
                      label="Partes Dueñas"
                      items={owners}
                      setItems={setOwners}
                      placeholder="Ingresa una parte dueña"
                    />

                    <FieldArray
                      label="Posibles Causas del Problema (Por favor, ingrese una opción de cada categoría)"
                      items={causes}
                      setItems={setCauses}
                      placeholder="Ingresa una posible causa"
                      select={['Método', 'Maquinaria', 'Mano de obra', 'Materiales' ]}
                    />

                    <FieldArray
                      label="Ingrese todos los datos cuantitativos que crea relevantes para la toma de desición, con su respectivo valor"
                      items={dataPoints}
                      setItems={setDataPoints}
                      placeholder="Ingresa un dato relevante"
                      data = {true}
                      select={evaluationOptions}
                    />

                    <FieldArray
                      label="Opciones a evaluar, acciones a tomar o posibles soluciones"
                      items={evaluationOptions}
                      setItems={setEvaluationOptions}
                      placeholder="Ingresa una opción de evaluación"
                    />

                    <FieldArray
                      label="Expresa los sentimientos que consideres relevantes a la situación"
                      items={feelings}
                      setItems={setFeelings}
                      placeholder="Ingresa una sentimiento"
                    />

                    <div className="d-grid mt-4">
                      <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Continuar
                      </Button>
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
