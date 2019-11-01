import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../Layout';

export const Title = props => {
  return(
    <Layout className={`${props.className} title`} style={props.style}>
      <Row>
        <Col>
          <h2><strong>{props.children}</strong></h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.subtitle}</p>
        </Col>
      </Row>
    </Layout>
  )
}