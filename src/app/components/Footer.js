import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function InfoFooter() {
    return (
        <footer className="bg-dark py-4 mt-auto">
            <Container>
                <Row className="align-items-center justify-content-between flex-column flex-sm-row">
                <Col className="col-auto">
                    <div className="small m-0 text-white">Copyright &copy; Juan Antonio Herrera de la Rosa 2024</div>
                </Col>
                <Col className="col-auto">
                    <Image src="/imgs/profile_icon.png" alt="Profile Icon" width={60} height={60} className='rounded' />
                </Col>
                </Row>
            </Container>
        </footer>
    );
}