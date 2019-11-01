import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

class NoMatch extends Component {
  render() {
    return(
      <Layout>
        <Title subtitle="This is not my beautiful house">Whoops!</Title>
        <Row>
          <Col>
            <p className="lead text-success">Page not found!</p>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default NoMatch;