import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Layout } from '..';

export const ContactMe = props => {
  return(
    <Layout className={`${props.className} contact-me`} style={props.style}>
      <Row>
        <Col>
          <h4><em>Email:</em></h4>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </Col>
        {/* <Col>
          <Link href="../../assets/pdf/thomas-christ-resume.pdf" download>
            Download My Resume
          </Link>
        </Col> */}
        <Col>
          <div className="text-right">
            <a href={props.linkedin}>
              <i className="linkedin"></i>
            </a>
            <a href={props.github}>
              <i className="github"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}