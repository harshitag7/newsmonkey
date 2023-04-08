import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {
//   Link
// } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Button from 'react-bootstrap/Button';

// // or less ideally   //TWO WAYS TO IMPORT
// import { Button } from 'react-bootstrap';

export class Nvbar extends Component {
  render() {
    return (
      <div>
            <Navbar  expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bussiness">business</Nav.Link>
            <Nav.Link href="/entertainment">entertainment</Nav.Link>
            <Nav.Link href="/health">health</Nav.Link>
            <Nav.Link href="/science">science</Nav.Link>
            <Nav.Link href="/sports">sports</Nav.Link>
            <Nav.Link href="/technology">technology</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}

export default Nvbar
