import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Menu, Dropdown } from 'antd';
import { NavBar } from 'antd-mobile';
import { FaSearch, FaUser } from 'react-icons/fa';
import './style.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Log In / Sign Up</Menu.Item>
  </Menu>
);

class Nav extends Component {
  render() {
    return (
      <NavBar
        leftContent={[
          <h1 className='navbar-brand'>EventPull</h1>
        ]}
        rightContent={[
          <Link to='/' className={window.location.pathname === "/" ? "item active" : "item"}>Explore</Link>,
          <Link to='/nearby' className={window.location.pathname === "/nearby" ? "item active" : "item"}>Nearby</Link>,
          <Link to='/saved' className={window.location.pathname === "/saved" ? "item active" : "item"}>Saved</Link>,
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link item" href="#">
              <FaUser /> 
            </a>
          </Dropdown>
        ]}>
        <Form layout='inline' style={{ position: "relative" }}>
          <Form.Item type="text">
            <Input placeholder='Search EventPull' id='search-bar' />
          </Form.Item>
          <FaSearch id='search-button' />
        </Form>

      </NavBar>
    )
  }
}

export default Nav;
