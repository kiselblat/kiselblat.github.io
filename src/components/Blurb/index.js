import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../Layout';

export const Blurb = props => {
  return(
    <Layout className={`${props.className} blurb`} style={props.style}>
      <Row>
        <Col>
          <p>{props.children}</p>
        </Col>
      </Row>
    </Layout>
  )
}