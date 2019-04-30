import React, { Component } from "react";
import { Menu, Icon, Drawer } from 'antd';
import Content from '../../../shared/layouts/Left-Sidebar'
import "./style.css";

class SortNearby extends Component {
  state = {
    current: '0.5',
    visible: false,
  }

  handleClick = (e) => {
    if (e.key === 'hidden-bar' || !e.key) {

    } else {
      this.setState({
        current: e.key,
      });
    }

    if (e.key) {
      this.props.sort(e.key)
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

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          id='nearby-sort'
        >
          <Menu.Item key="hidden-bar" onClick={this.showDrawer}>
            <Icon type="double-right" />
          </Menu.Item>
          <Menu.Item key='0.5'>
            <Icon type='environment' /> 0.5 mi
          </Menu.Item>
          <Menu.Item key='1'>
            <Icon type="environment" /> 1 mi
          </Menu.Item>
          <Menu.Item key='5'>
            <Icon type="environment" /> 5 mi
          </Menu.Item>
          <Menu.Item key='10'>
            <Icon type="environment" /> 10 mi
          </Menu.Item>
          <Menu.Item key='25'>
            <Icon type="environment" /> 25 mi
          </Menu.Item>
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

export default SortNearby;
