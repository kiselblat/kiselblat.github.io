import React, { Component } from 'react';
import { Layout, CardLayout } from '../components/Layout';
import { Title } from '../components/Title';
import PortfolioCard from '../components/PortfolioCard'

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
        <Title subtitle="Some Things I've Made">Portfolio</Title>
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
      </Layout>
    )
  }
}

export default Portfolio;