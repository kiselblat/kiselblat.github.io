import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

export const CardLayout = props => {
  return(
    <Container className="card-layout">
      {props.children}
    </Container>
  )
}

export default CardLayout;