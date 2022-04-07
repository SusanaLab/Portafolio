import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Header = () => {
  return (
    <><Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Background</Nav.Link>
      <Nav.Link href="#pricing">Proyects</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}
