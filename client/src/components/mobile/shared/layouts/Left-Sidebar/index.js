import { List } from "antd-mobile";
import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
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
  }
}

export default Content;
