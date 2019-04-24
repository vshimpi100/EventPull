import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMobile from './components/mobile/shared/layouts/Nav';
import NavDesktop from './components/desktop/shared/layouts/Nav';
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import windowSize from 'react-window-size';
import Explore from './pages/explore';
import Nearby from './pages/nearby';

class App extends Component {

    handleView = (width) => {
        if (width <= 1024) {
            return (
                <div>
                    <NavMobile />
                    <Route exact path='/' component={Explore} />
                    {/* <Route exact path='/nearby' component={Nearby} /> */}
                </div>

            )
        } else {
            return (
                <div>
                    <NavDesktop />
                    <Route exact path='/' component={Explore} />
                    <Route exact path='/nearby' component={Nearby} />
                </div>
            )
        }
    }

    render() {
        return (
            <Router>
                {this.handleView(this.props.windowWidth)}
            </Router>
        )
    }
}

export default windowSize(App);
