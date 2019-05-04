<<<<<<< HEAD:client/src/utils/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
...
import Nav from './components/shared/layouts/Nav';
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMobile from "./components/mobile/shared/layouts/Nav";
import NavDesktop from "./components/desktop/shared/layouts/Nav";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
<<<<<<< HEAD:client/src/utils/App.js
import windowSize from 'react-window-size';
>>>>>>> e85ff18aa737d0f29b34333a465e0a1d3f1aaa75:client/src/App.js
import Explore from './pages/explore';
import Nearby from './pages/nearby';
import Saved from './pages/saved';
import BottomNav from './components/mobile/shared/layouts/Bottom-Nav';
=======
import windowSize from "react-window-size";
import Explore from "./pages/explore";
import Nearby from "./pages/nearby";
import Saved from "./pages/saved";
import BottomNav from "./components/mobile/shared/layouts/Bottom-Nav";
>>>>>>> 3f42d414e8e4c228da8d1c4cb2a7138d3c978186:client/src/App.js

// AWS amplify imports
import Auth from "@aws-amplify/auth";
import Amplify from 'aws-amplify';
// import {Analytics} from 'aws-amplify';
import awsconfig from "./aws-exports";

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);

class App extends Component {
    // componentDidMount() {
    //     Analytics.record('APP_STARTED');
    // }

  handleSearch = search => {
    console.log(search);
  };

  handleView = width => {
    if (width <= 1024) {
      return (
        <div>
          <NavMobile />
          <Route exact path="/" component={Explore} />
          <Route exact path="/nearby" component={Nearby} />
          <BottomNav />
        </div>
      );
    } else {
      return (
        <div>
          <NavDesktop
            search={this.handleSearch}
          />
          <Route exact path="/" component={Explore} />
          <Route exact path="/nearby" component={Nearby} />
          <Route exact path="/saved" component={Saved} />
        </div>
      );
    }
  };

  render() {
    return <Router>{this.handleView(this.props.windowWidth)}</Router>;
  }
}

export default windowSize(App);
