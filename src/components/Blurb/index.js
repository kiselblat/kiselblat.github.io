import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../';

export const Blurb = props => {
  return(
    <Layout className={`${props.className} blurb`} style={props.style}>
      <Row>
        {props.src ? 
          <Col md={4}>
              <img src={props.src} alt={props.alt} />
          </Col>
          :
          <Col className="d-none" />
        }
        <Col md>
          <p>{props.children}</p>
        </Col>
      </Row>
    </Layout>
  )
}