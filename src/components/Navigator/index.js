import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Layout } from '../Layout'

export const Navigator = props => {
  const opacity = Math.min(props.currentScrollHeight / 250 , 1)
  return(
    <Navbar expand="md" sticky="top" bg="dark" variant="dark" className="text-light border-bottom">
    <Layout>
      <Navbar.Brand className="text-info" style={{ opacity }} href="/">
        {props.brand}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
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

    </Layout>
    </Navbar>
  )   
}
