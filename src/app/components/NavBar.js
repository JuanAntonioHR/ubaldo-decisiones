import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/navigation'

export default function NavBar() {
    const router = useRouter()

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Graficador de decisiones</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => {router.push('home')}}>Inicio</Nav.Link>
                <Nav.Link onClick={() => {router.push('question-form')}}>Cuestionario</Nav.Link>
                <NavDropdown title="Análisis" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => {router.push('foda')}}>FODA</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {router.push('catwda')}}>CATWDA</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {router.push('ishikawa')}}>Ishikawa</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {router.push('pareto')}}>Pareto</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {router.push('sombreros')}}>Sombreros de pensamiento</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}