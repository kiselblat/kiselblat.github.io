import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Hero } from './components/Hero';
import { Navigator } from './components/Navigator';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

// import logo from './logo.svg';

// import * as projects from './projects.json';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     projects: projects.entries
  //   };
  //   console.log(this.state);
  // }
  
  render() {
    return(
      <Router>
        <Hero/>
        <Navigator/>
          <Switch>
            <Route exact path="/" component={ About } />
            <Route path="/portfolio" component={ Portfolio } />
            <Route path="/contact" component={ Contact } />
            <Route component={ NoMatch } />
          </Switch>
      </Router>
    );
  }
}

export default App;
