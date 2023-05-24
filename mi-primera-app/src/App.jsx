import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import CartWidget from './components/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';



 function App() {
  return (
    <div className='body'>
      <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="#home" className='title'>PerroS PeludoS <CartWidget/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Quienes somos?</Nav.Link>
              <Nav.Link href="#link">Adopciones Responsables</Nav.Link>
            </Nav>
            <Button variant="outline-success">Iniciar Sesion</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='portada'>
      <img className='perrosPeludos' src="../images/perrospeludos.jpg" alt="portada" />
      </div>
      <div><p className='parrafo'>Todo lo que necesitas para tu mascota a solo un click</p></div>
    </div>
    
      );

    
  
}

export default App;


