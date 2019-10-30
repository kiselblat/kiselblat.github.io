import React, { Component } from 'react';
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
        <h2>Portfolio</h2>
        <p>These are the sorts of things I can do.</p>
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
      </Layout>
    )
  }
}

export default Portfolio;