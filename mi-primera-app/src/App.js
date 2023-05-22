import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Button variant="outline-success">Sign In</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;


