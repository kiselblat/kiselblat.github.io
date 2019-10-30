import React, { Component } from 'react';
import { Layout } from '../components/Layout';

class About extends Component {
  render() {
    return(
      <Layout>
        <h2 className="text-success">About</h2>
        <p>Tom Christ is a Minneapolis based full stack web developer. If he had a hammer, he'd do this with nails but luckily he has react.</p>
      </Layout>
    )
  }
}

export default About;