import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Nameplate } from '../Nameplate';

export const Hero = props => {
  const opacity = Math.min(25 / props.currentScrollHeight  , 1)
  return(
    <Jumbotron fluid className="bg-dark text-info my-0">
        <Nameplate
          style={{ opacity }}
          className="text-center"
          subtitle={props.subtitle}
        >
        {props.children}
        </Nameplate>
    </Jumbotron>
  )
}
