import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <Menu text>
        <Menu.Item className='nav-header' href="/explore">EventPull</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Link to='/' className={window.location.pathname === "/explore" ? "item active" : "item"}>Explore</Link>
          <Link to='/nearby' className={window.location.pathname === "/nearby" ? "item active" : "item"}>Nearby</Link>
          <Link to='/saved' className={window.location.pathname === "/saved" ? "item active" : "item"}>Saved</Link>
          <Menu.Item>
            <Dropdown text='Profile'>
              <Dropdown.Menu>
                <Dropdown.Item text='New' />
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
                <Dropdown.Item text='Rename' description='ctrl + r' />
                <Dropdown.Item text='Make a copy' />
                <Dropdown.Item icon='folder' text='Move to folder' />
                <Dropdown.Item icon='trash' text='Move to trash' />
                <Dropdown.Divider />
                <Dropdown.Item text='Download As...' />
                <Dropdown.Item text='Publish To Web' />
                <Dropdown.Item text='E-mail Collaborators' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav;
