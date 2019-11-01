import React, { Component } from 'react';
import { Blurb, Skillset, Title } from '../components';

import * as bio from '../assets/data/bio.json';

class About extends Component {
  render() {
    return(
      <>
        <Title subtitle="A Little Information">About</Title>
        <Blurb>{bio.blurb}</Blurb>
        <Skillset>
          {bio.skills.map((skill) => (<span>{`${skill}, `}</span>))}
        </Skillset>
      </>
    )
  }
}

export default About;