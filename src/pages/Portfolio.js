import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout, CardLayout } from '../components/Layout';
import PortfolioCard from '../components/PortfolioCard'
// import CardLayout from '../components/CardLayout'
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
            <h2 className="text-success display-4"><strong>Portfolio</strong></h2>
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
                  key={card.key}
                  name={card.name}
                  description={card.description}
                  techs={card.techs}
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