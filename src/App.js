import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return(
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
