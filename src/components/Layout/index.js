import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

export const Layout = props => {
  return(
    <Container className="my-4">
      {props.children}
    </Container>
  )
}

export default Layout;