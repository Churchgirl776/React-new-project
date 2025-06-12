import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
  let [expanded, setExpanded] = React.useState(false);
  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} collapseOnSelect expand="lg" bg="transparent" variant='light'>
    
    <Container>
        <div className="text-black d-block d-lg-block">
          <img src="https://www.shutterstock.com/image-vector/abstract-lines-car-logo-vector-600nw-2064174017.jpg" alt="" height={"50px"} width={"50px"}/>
        </div>

        {/* Center - Navigation and Logo */}
        <Navbar.Brand className="mx-auto text-white text-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            {/* Replace with logo if needed */}
            <div></div>
          </div>
        </Navbar.Brand>

        {/* Right Side - Navigation & Button */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#services" className="text-white mx-2">SERVICES</Nav.Link>
          <Nav.Link href="#about" className="text-white mx-2">ABOUT US</Nav.Link>
          <Nav.Link href="#fleet" className="text-white mx-2">OUR FLEET</Nav.Link>
          <Nav.Link href="#chauffeurs" className="text-white mx-2">CHAUFFEURS</Nav.Link>
          <Button variant="light" className="ms-3">BOOK A CHAUFFEUR</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
