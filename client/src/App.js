import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
...

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
