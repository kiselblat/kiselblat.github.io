import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../Layout';

export const Nameplate = props => {
  return(
    <Layout className={`${props.className}`} style={props.style}>
      <Row>
        <Col>
          <h1 className="display-1">{props.children}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead"><em>{props.subtitle}</em></p>
        </Col>
      </Row>
    </Layout>
  )
}