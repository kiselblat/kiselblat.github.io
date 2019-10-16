import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Hero } from './components/Hero';
import { Layout } from './components/Layout';
import { Navigator } from './components/Navigator';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return(
      <Router>
        <Navigator/>
        <Hero/>
        <Layout>
          <Switch>
            <Route exact path="/" component={ About } />
            <Route path="/portfolio" component={ Portfolio } />
            <Route path="/contact" component={ Contact } />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
