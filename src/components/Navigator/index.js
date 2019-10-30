import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const Navigator = () => (
  <Navbar expand="md" sticky="top" bg="dark" variant="dark" className="text-light">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)