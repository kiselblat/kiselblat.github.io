import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '..';

export const ContactMe = props => {
  return(
    <Layout className={`${props.className} contact-me`} style={props.style}>
      <Row>
        <Col>
          <p><em>Email:</em></p>
          <p>{props.email}</p>
        </Col>
      </Row>
    </Layout>
  )
}