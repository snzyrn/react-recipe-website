import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{ fontFamily: 'Pacifico, sans-serif', fontSize: '2rem', color: '#9ca576' }}>
              RecipeGem
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="custom-nav">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/recipes" className="nav-link">Recipes</Link>
                <Link to="/about" className="nav-link">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navigation