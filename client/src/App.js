import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DesktopNav from './components/desktop/shared/layouts/Nav';
import MobileNav from './components/mobile/shared/layouts/Nav';
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import windowSize from 'react-window-size';
// import Explore from './pages/explore';

class App extends Component {

    handleView = (width) => {
        console.log(width);
        if (width <= 1024) {
            return (
                <MobileNav />
            )
        } else {
            return (
                <DesktopNav />
            )
        }
    }

    render() {
        return (
            <Router>
                <div>
                    {this.handleView(this.props.windowWidth)}
                    {/* <Route exact path='/' component={Explore} /> */}
                </div>
            </Router>
        )
    }
}

export default windowSize(App);
