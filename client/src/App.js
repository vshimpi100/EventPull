import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMobile from "./components/mobile/shared/layouts/Nav";
import NavDesktop from "./components/desktop/shared/layouts/Nav";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import windowSize from "react-window-size";
import Explore from "./pages/explore";
import Nearby from "./pages/nearby";
import Saved from "./pages/saved";
import BottomNav from "./components/mobile/shared/layouts/Bottom-Nav";
import authentication from "./utils/auth";
import API from "./utils/API";

// AWS amplify imports
import Auth from "@aws-amplify/auth";
import Amplify from "aws-amplify";
// import {Analytics} from 'aws-amplify';
import awsconfig from "./aws-exports";

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);

// const Nav = async () => {
//   const user = await auth.getCurrentUser();
//   return <NavDesktop search={this.handleSearch} currentUser={user} />;
// };

class App extends Component {
  state = {
    user: null
  };

  componentWillMount = () => {
    // Analytics.record('APP_STARTED');
    authentication
      .getCurrentUser()
      .then(currentUser => {
        if (currentUser) {
          console.log("getting userID for " + currentUser.username);
          API.getUserID(currentUser.username)
            .then(dbUser => {
              this.setState({
                user: dbUser
              })
              console.log("db user found", this.state.user)
            })
        } else {
          console.log("no user currently logged in")
        }
      })
      .catch(err => console.log(err));
  };

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
          <NavDesktop search={this.handleSearch} user={this.state.user} />
          <Route exact path="/" render={() => <Explore user={this.state.user} />} />
          <Route exact path="/nearby" render={() => <Nearby user={this.state.user} />} />
          <Route exact path="/saved" render={() => <Saved user={this.state.user} />} />
        </div>
      );
    }
  };

  render() {
    return <Router>{this.handleView(this.props.windowWidth)}</Router>;
  }
}

export default windowSize(App);
