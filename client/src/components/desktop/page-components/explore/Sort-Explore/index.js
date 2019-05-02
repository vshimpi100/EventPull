import React, { Component } from "react";
import { Menu, Icon, Drawer } from 'antd';
import Content from '../../../shared/layouts/Left-Sidebar'
import "./style.css";

class SortExplore extends Component {
  state = {
    current: 'best',
    visible: false,
    sort_order: -1
  }

  componentDidMount = () => {
    this.props.sort('best', this.state.sort_order);
  }

  handleClick = (e) => {
    if (e.key === 'hidden-bar' || !e.key) {

    } else {
      this.setState({
        current: e.key,
      });
    }

    if (e.key) {
      this.props.sort(e.key, this.state.sort_order);
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

  handleSortOrder = () => {
    if (this.state.sort_order === -1) {
      this.setState({
        sort_order: 1
      })
    } else {
      this.setState({
        sort_order: -1
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
          id='explore-sort'
        >
          <Menu.Item key="hidden-bar" onClick={this.showDrawer}>
            <Icon type="double-right" />
          </Menu.Item>
          <Menu.Item key='best'>
            <Icon type='star' /> Best
          </Menu.Item>
          <Menu.Item key='date'>
            <Icon type="calendar" /> Date
          </Menu.Item>
          <Menu.Item key='distance'>
            <Icon type="environment" /> Distance
          </Menu.Item>
          <Menu.Item key='price'>
            <Icon type="dollar" /> Price
          </Menu.Item>
          <Menu.Item key='comments'>
            <Icon type="message" /> Comments
          </Menu.Item>
          <Icon
            type={this.state.sort_order === -1 ? 'arrow-down' : 'arrow-up'}
            className='sort-order'
            onClick={this.handleSortOrder}
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