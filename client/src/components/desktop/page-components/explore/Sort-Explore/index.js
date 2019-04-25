import React, { Component } from "react";
import { Menu, Icon, Drawer } from 'antd';
import Content from '../../../shared/layouts/Left-Sidebar'
import "./style.css";

class SortExplore extends Component {
  state = {
    current: 'item_1',
    visible: false,
    active: 'descending'
  }

  handleClick = (e) => {
    if (e.key === 'hidden-bar' || !e.key) {

    } else {
      this.setState({
        current: e.key,
      });
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleActiveClass = () => {
    if (this.state.active === 'descending') {
      this.setState({
        active: 'ascending'
      })
    } else {
      this.setState({
        active: 'descending'
      })
    }
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="hidden-bar" onClick={this.showDrawer}>
            <Icon type="double-right" />
          </Menu.Item>
          <Menu.Item>
            <Icon type='star' /> Best
          </Menu.Item>
          <Menu.Item>
            <Icon type="calendar" /> Date
          </Menu.Item>
          <Menu.Item>
            <Icon type="environment" /> Distance
          </Menu.Item>
          <Menu.Item>
            <Icon type="dollar" /> Price
          </Menu.Item>
          <Menu.Item>
            <Icon type="message" /> Comments
          </Menu.Item>
          <Icon
            type={this.state.active === 'descending' ? 'arrow-down' : 'arrow-up'}
            className='sort-order'
            onClick={this.handleActiveClass}
          />
        </Menu>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Content />
        </Drawer>
      </div>
    );
  }
}

export default SortExplore;