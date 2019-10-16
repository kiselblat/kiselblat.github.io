import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.scss';

export const Hero = props => {
  return(
    <Jumbotron fluid>
      <Container>
        <h1>Tom Christ</h1>
        <p>Full Stack Developer</p>
        <p>Mongo, Express, React</p>
      </Container>
    </Jumbotron>
  )
}

export default Hero;