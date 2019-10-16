import React from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';

export const PortfolioCard = props => {
  return(
    <Card className="portfolio-card">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>The subtitle for the card</Card.Subtitle>
        <Card.Text>
          This is where the description goes. What a nice little container for all kinds of long, longer, and longest text.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PortfolioCard;