import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import {Icon as WebIcon} from "antd"
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <NavBar
          className="nav-mobile"
          icon={<WebIcon type="bars" size="large"/>}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <WebIcon key="1" type="user" />
          ]}
        >
          EventPull
        </NavBar>
      </div>
    );
  }
}

export default Nav;
