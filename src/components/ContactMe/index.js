import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '..';

export const ContactMe = props => {
  return(
    <Layout className={`${props.className} contact-me`} style={props.style}>
      <Row>
        <Col>
          <p className="email"><em>Email:</em></p>
          <p>{props.email}</p>
        </Col>
        <Col>
          <div className="text-right">
            <a href={props.linkedin}>
              <i className="fab fa-linkedin fa-5x text-dark"></i>
            </a>
            <a href={props.github}>
              <i className="fab fa-github-square fa-5x text-dark"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}