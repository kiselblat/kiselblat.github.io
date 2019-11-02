import React, { Component } from 'react';
import { Blurb, Skillset, Title } from '../components';

import * as bio from '../assets/data/bio.json';

class About extends Component {
  render() {
    return(
      <>
        <Title subtitle="A Little Information">About</Title>
        <Blurb src={bio.headshot}>{bio.blurb}</Blurb>
        <Skillset>
          {bio.skills.map(
            (skill, index) => (
              <span>
                {index !== (bio.skills.length - 1) ? `${skill}, ` : `${skill}`}
              </span>
            )
          )}
        </Skillset>
      </>
    )
  }
}

export default About;