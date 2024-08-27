'use client'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation'
import NavBar from '@/app/components/NavBar';

function CallToAction() {
  return (
    <div className="bg-secondary my-5 py-4 text-center">
      <div className="card-body">
        <h1 className='fw-bolder'>Graficador de desiciones</h1>
        <p className="m-0">
            Selecciones la vista que desee para analizar su desición
        </p>
      </div>
    </div>
  );
}

function CardItem({ imgSrc, title, text, link }) {
  const router = useRouter()

  return (
    <Col md={4} className="mb-5">
      <Card className="h-100">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button onClick={() => {router.push(link)}} variant="primary">Abrir vista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function ContentRow() {
  const cardData = [
    {
      imgSrc: '/imgs/foda.jpeg',
      title: 'Análisis FODA',
      text: 'El análisis FODA es una herramienta de planificación estratégica que permite evaluar las Fortalezas, Oportunidades, Debilidades y Amenazas de un proyecto o negocio.',
      link: 'foda'
    },
    {
      imgSrc: '/imgs/catwda.jpeg',
      title: 'Análisis CATWDA',
      text: 'El análisis CATWDA es una herramienta de planificación estratégica que permite evaluar los clientes, actores, transformaciones, weltanschaung, dueños y ambiente de un proyecto o negocio.',
      link: 'catwda'
    },
    {
      imgSrc: '/imgs/ishikawa.jpeg',
      title: 'Diagrama de Ishikawa',
      text: 'El diagrama de Ishikawa es una herramienta de análisis que permite identificar las causas de un problema.',
      link: 'ishikawa'
    },
    {
      imgSrc: '/imgs/pareto.jpeg',
      title: 'Diagrama de Pareto',
      text: 'El diagrama de Pareto es una herramienta de análisis que permite visualizar datos cuantitativos de forma ordenada.',
      link: 'pareto'
    },
    {
      imgSrc: '/imgs/sombreros.jpeg',
      title: 'Sombreros de pensamiento',
      text: 'Los sombreros de pensamiento es una técnica que permite analizar un problema desde diferentes perspectivas.',
      link: 'sombreros'
    }
  ];

  return (
    <Container>
      <Row className="gx-4 gx-lg-5">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            link={card.link}
          />
        ))}
      </Row>
    </Container>
  );
}

export default function Home() {
  return (
    <>
        <NavBar />
        <div className='container' >
            <CallToAction />
            <ContentRow />
        </div>
    </>
  );
}