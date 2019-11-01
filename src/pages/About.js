import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

class About extends Component {
  render() {
    return(
      <Layout>
        <Title subtitle="A Little Information">About</Title>
        <Row>
          <Col>
            <p className="text-secondary">Tom Christ is a Minneapolis based full stack web developer. If he had a hammer, he'd do this with nails but luckily he has react.</p>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default About;