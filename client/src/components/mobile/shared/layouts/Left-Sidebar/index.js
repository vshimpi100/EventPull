import { Drawer, List, NavBar, Icon } from "antd-mobile";
import React, { Component } from "react";
import "./style.css";

class App extends React.Component {
  // state = {
  //   open: false
  // };
  // onOpenChange = (...args) => {
  //   console.log(args);
  //   this.setState({ open: !this.state.open });
  // }

  render() {
    const sidebar = (
      <List>
        {[0, 1, 2, 3, 4, 5, 3, 14, 15].map((i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                Category
              </List.Item>
            );
          }
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >
              Category{index}
            </List.Item>
          );
        })}
      </List>
    );

    return (
      <div>
        {/* <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar> */}
        <Drawer
          className="mobile-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
            paddingTop: 42
          }}
          sidebar={sidebar}
          open={this.props.open}
          onOpenChange={this.props.handler}
        >
        </Drawer>
      </div>
    );
  }
}

export default App;
