import React, { Component } from 'react';
import PortfolioCard from '../components/PortfolioCard'
import CardLayout from '../components/CardLayout'

class Portfolio extends Component {
  render() {
    return(
      <div>
        <h2>Portfolio</h2>
        <p>Tom Christ is a Minneapolis based full stack web developer. If he had a hammer, he'd do this with nails but luckily he has react.</p>
        <CardLayout>

        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>

        </CardLayout>
      </div>
    )
  }
}

export default Portfolio;