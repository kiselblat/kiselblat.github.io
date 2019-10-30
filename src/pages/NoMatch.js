import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../components/Layout';

class NoMatch extends Component {
  render() {
    return(
      <Layout>
        <Row>
          <Col>
            <h2 className="text-success">Whoops!</h2>
          </Col>
        </Row>
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