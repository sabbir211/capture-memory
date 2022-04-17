import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Images/logo1.png"
const NavigationBar = () => {
    return (
        <div>
           <Navbar sticky="top" collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:"#00004d"}}>
  <Container>
  <Navbar.Brand href="#home">
      <img src={logo} alt="" style={{width:"70px"}}/>
    <span>Memory</span>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
   
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default NavigationBar;