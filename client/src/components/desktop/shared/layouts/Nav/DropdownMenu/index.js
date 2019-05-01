import React, { Component } from 'react';
import Login_SignUp from '../../../general/Login-SignUp/index';
import { Menu, Modal } from 'antd';
import './style.css';

class DropdownMenu extends Component {

    state = {
        ModalText: 'Content of the modal',
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Menu>
                    <Menu.Item key="0">
                        <a href="">1st menu item</a>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <a href="">2nd menu item</a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item onClick={this.showModal} key="3">Log In / Sign Up</Menu.Item>
                </Menu>
                <Modal
                    visible={visible}
                    onCancel={this.handleCancel}
                >
                    <Login_SignUp />
                </Modal>
            </div>
        )
    }
}

export default DropdownMenu;