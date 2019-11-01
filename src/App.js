import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from './components/Header';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

// import logo from './logo.svg';

import * as bio from './bio.json';

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
        <Header
          currentScrollHeight={this.state.currentScrollHeight}
          subtitle={bio.title}
          brand={bio.brand}
        >
          {bio.name}
        </Header>
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
