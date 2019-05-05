import React, { Component } from "react";
import { Menu, Icon, Drawer } from 'antd';
import Content from '../../../shared/layouts/Left-Sidebar'
import "./style.css";

class SortExplore extends Component {
  state = {
    sort: 'best',
    visible: false,
    order: false
  }

  componentDidMount = () => {
    this.props.sort(this.state.sort, this.state.order);
  }

  handleClick = (e) => {
    if (e.key === 'hidden-bar' || !e.key) {
      return null;
    } else if (e.key) {
      this.setState({
        sort: e.key,
      }, () => {
        this.props.sort(this.state.sort, this.state.order);
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

  handleSortOrder = () => {
    let temp = !this.state.order;
    this.setState({
      order: temp
    }, () => {
      this.props.sort(this.state.sort, this.state.order);
    })
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.sort]}
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
            type={this.state.order === false ? 'arrow-down' : 'arrow-up'}
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