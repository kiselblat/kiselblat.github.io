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
  constructor() {
    super();
    this.state = {
      currentScrollHeight: 0,
    };
  }

  componentDidMount () {      
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 25) * 25;
      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight});
          console.log(newScrollHeight);
      }
    }
  }
  
  render() {
    return(
      <Router>
        <Hero
          currentScrollHeight={this.state.currentScrollHeight}
          subtitle="Full-Stack Web Developer"
        >
        Tom Christ
        </Hero>
        <Navigator currentScrollHeight={this.state.currentScrollHeight} />
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
