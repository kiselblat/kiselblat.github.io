import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../';

export const Blurb = props => {
  return(
    <Layout className={`${props.className} blurb`} style={props.style}>
      {props.title ?
        <Row>
          <Col>
            <h3>
              {props.title}
            </h3>
          </Col>
        </Row>
      :
        <Row className="d-none" />
      }
      <Row>
        {props.src && !props.right ? 
          <Col md={4}>
              <img src={props.src} alt={props.alt} />
          </Col>
          :
          <Col className="d-none" />
        }
        <Col md>
          <p>{props.children}</p>
        </Col>
        {props.src && props.right ? 
          <Col md={4}>
              <img src={props.src} alt={props.alt} />
          </Col>
          :
          <Col className="d-none" />
        }
      </Row>
    </Layout>
  )
}