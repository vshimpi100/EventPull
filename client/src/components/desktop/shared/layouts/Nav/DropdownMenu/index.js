import React, { Component } from 'react';
import Login from '../../../general/Login';
import NewUser from '../../../general/NewUser'
import { Menu, Modal } from 'antd';
import './style.css';

class DropdownMenu extends Component {

    state = {
        visible: false,
    }

    showLogin = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const { visible } = this.state;
        return (
            <div>
                <Menu>
                    <Menu.Item key="0">Create Event</Menu.Item>
                    <Menu.Item key="1">
                        <a href="">2nd menu item</a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item onClick={this.showLogin} key="3">Log In / Sign Up</Menu.Item>
                </Menu>
                <Modal
                    visible={visible}
                    onCancel={this.handleCancel}
                >
                    <Login />
                </Modal>
            </div>
        )
    }
}

export default DropdownMenu;