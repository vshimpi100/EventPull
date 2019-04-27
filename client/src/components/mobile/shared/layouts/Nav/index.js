import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon, Drawer } from "antd-mobile";
import { Icon as WebIcon } from "antd";
import "./style.css";
import Content from "../../../shared/layouts/Left-Sidebar/index";

class Nav extends Component {
  state = {
    open: false
  };

  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        {/* <Flex>

        </Flex> */}
        <NavBar
          className="nav-mobile"
          icon={<WebIcon type="bars" size="large" />}
          onLeftClick={this.onOpenChange}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <WebIcon key="1" type="user" />
          ]}
        >
          EventPull
        </NavBar>
        <Drawer
          position="left"
          className="mobile-drawer"
          style={{minHeight: document.documentElement.clientHeight }}
          // enableDragHandle
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
            paddingTop: 42,
          }}
          touch={true}
          sidebar={<Content />}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        />
      </div>
    );
  }
}

export default Nav;
