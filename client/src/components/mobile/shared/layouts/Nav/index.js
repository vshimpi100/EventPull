import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { Icon as WebIcon } from "antd";
import "./style.css";
import Drawer from "../../../shared/layouts/Left-Sidebar/index";

class Nav extends Component {
  state = {
    visible: false,
  };

  handleDrawer = () => {
    let temp=!this.state.visible
    this.setState({
      visible: temp
    });
  };

  render() {
    return (
      <div>
        <NavBar
          className="nav-mobile"
          icon={<WebIcon type="bars" size="large" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <WebIcon key="1" type="user" />
          ]}
        >
          EventPull
        </NavBar>
        <Drawer
        open= {this.visible}
        handler= {this.handleDrawer}
        ></Drawer>
      </div>
    );
  }
}

export default Nav;
