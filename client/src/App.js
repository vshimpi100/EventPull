import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {
  render() {
      return(
          <Router>
              <Nav />
          </Router>
      )
  }
}

export default App;
