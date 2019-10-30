import React, { Component } from 'react';
import { Layout } from '../components/Layout';

class NoMatch extends Component {
  render() {
    return(
      <Layout>
        <h1>Whoops!</h1>
        <p>Page not found!</p>
      </Layout>
    )
  }
}

export default NoMatch;