import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
...
import Nav from './components/shared/layouts/Nav';
import Explore from './pages/explore';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Route exact path='/' component={Explore} />
                </div>
            </Router>
        )
    }
}

export default App;
