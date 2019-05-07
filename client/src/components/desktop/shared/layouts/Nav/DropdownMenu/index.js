import React, { Component } from "react";
import Login from "../../../general/Login";
import auth from "../../../../../../utils/auth";
import { Menu, Modal } from "antd";
import "./style.css";
import { truncate } from "fs";

class DropdownMenu extends Component {
  state = {
    user: null,
    visible: false,
    isAuthenticated: false,
    isNewUser: false,
    isPendingValidation: false
  };

  componentDidMount = () => {
    if (this.props.user) {
      console.log("dropdown user is", this.props.user);
      let currentUser = this.props.user;
      this.setState(
        {
          user: currentUser,
          isAuthenticated: true
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
      console.log("no user from dropdown menu");
    }
  };

  handleLogin = () => {
    this.setState({
      visible: true
    });
  };

  handleSignout = user => {
    auth.signOut(user.username).then(res => {
      if (res) {
        this.setState({
          isAuthenticated: false
        })
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleLoginSubmit = user => {
    if (user) {
      this.setState({
        isAuthenticated: true,
        user: user
      });
    }
  };

  handleNewUser = () => {
    let temp = !this.state.isNewUser;
    this.setState({
      isNewUser: temp
    });
  };

  handleValidationPending = () => {
    let temp = !this.state.isPendingValidation;
    this.setState({
      isPendingValidation: temp
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Menu>
          <Menu.Item key="0">
            <a href="">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          {this.state.isAuthenticated ? (
            <Menu.Item
              onClick={() => this.handleSignout(this.state.user)}
              key="3"
            >
              Log Out
            </Menu.Item>
          ) : (
              <Menu.Item onClick={this.handleLogin} key="3">
                Log In / Sign Up
            </Menu.Item>
            )}
        </Menu>
        <Modal visible={visible} onCancel={this.handleCancel}>
          <Login
            handleCancel={this.handleCancel}
            handleLoginSubmit={this.handleLoginSubmit}
            handleNewUser={this.handleNewUser}
            isNewUser={this.state.isNewUser}
            isPendingValidation={this.state.isPendingValidation}
            handleValidationPending={this.handleValidationPending}
          />
        </Modal>
      </div>
    );
  }
}

export default DropdownMenu;
