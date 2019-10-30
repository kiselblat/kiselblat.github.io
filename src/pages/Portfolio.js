import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../components/Layout';
import PortfolioCard from '../components/PortfolioCard'
import CardLayout from '../components/CardLayout'
import * as projects from '../projects.json';


class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: projects.entries
    };
    console.log(this.state);
  }

  render() {
    return(
      <Layout>
        <Row>
          <Col>
            <h2 className="text-success">Portfolio</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead text-light">These are the sorts of things I can do.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardLayout>

              {this.state.projects.map(card => (
                <PortfolioCard
                  name={card.name}
                  description={card.description}
                  image={card.image}
                  repoLink={card.repoLink}
                  appLink={card.appLink}
                />
              ))}

            </CardLayout>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Portfolio;