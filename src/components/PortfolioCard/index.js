import React from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';

export const PortfolioCard = props => {
  return(
    <Card className="w-30 mb-4 bg-light text-dark border-light">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="text-info">{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-success">{props.techs}</Card.Subtitle>
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

export default PortfolioCard;