import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../components/Layout';

class Contact extends Component {
  render() {
    return(
      <Layout>
        <Row>
          <Col>
            <h2 className="text-info">Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead text-light">Tom Christ is a Minneapolis based full stack web developer. If he had a hammer, he'd do this with nails but luckily he has react.</p>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Contact;