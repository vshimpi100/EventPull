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
import auth from "./utils/auth";

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

const getUser = async () => {
  const user = await auth.getCurrentUser();
  return user;
};

const user = getUser();

class App extends Component {
  //   state = {
  //     user: null
  //   };

  //   componentDidMount = async () => {
  //     // Analytics.record('APP_STARTED');
  //     await auth
  //       .getCurrentUser()
  //       .then(currentUser => {
  //         this.setState({
  //           user: currentUser
  //         });
  //       })
  //       .catch(err => console.log(err));
  //     console.log("user", this.state.user);
  //   };

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
          {user ? (
            <NavDesktop search={this.handleSearch} currentUser={user} />
          ) : (
            <NavDesktop search={this.handleSearch} currentUser={false} />
          )}
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
