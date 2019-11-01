import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../';

export const Skillset = props => {
  return(
    <Layout className={`${props.className} skillset`} style={props.style}>
      <Row>
        <Col>
          <p><em>{props.children}</em></p>
        </Col>
      </Row>
    </Layout>
  )
}