import React from 'react';
import { Card } from 'react-bootstrap';

export const PortfolioCard = props => {
  return(
    <Card className="portfolio-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="card-title">{props.name}</Card.Title>
        <Card.Subtitle className="card-subtitle">{props.techs}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {props.repoLink ? 
        <Card.Link href={props.repoLink}>See the Code</Card.Link>
        :
        <Card.Link />
        }
        {props.appLink ? 
        <Card.Link href={props.appLink}>Try the App</Card.Link>
        :
        <Card.Link />
        }
      </Card.Footer>
    </Card>
  )
}
