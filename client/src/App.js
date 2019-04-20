import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/mobile/shared/layouts/Nav';
import Explore from './pages/explore';
import "antd-mobile/dist/antd-mobile.css";

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
