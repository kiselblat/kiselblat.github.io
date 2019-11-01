import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = props => {
  return(
    <Container className={`${props.className} layout`} style={props.style}>
      {props.children}
    </Container>
  )
}

export const CardLayout = props => {
  return(
    <Container className={`${props.className} card-layout`}>
      {props.children}
    </Container>
  )
}