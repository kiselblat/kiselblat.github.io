import React, { Component } from 'react';
import { Blurb, Title } from '../components';

import * as bio from '../bio.json';

class About extends Component {
  render() {
    return(
      <>
        <Title subtitle="A Little Information">About</Title>
        <Blurb>{bio.blurb}</Blurb>
      </>
    )
  }
}

export default About;