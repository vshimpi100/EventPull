import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
// import './style.css';

class NewUser extends Component {
    state = {
        username: '',
        password: '',
        loading: false,
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.input);
        this.setState({
            username: '',
            password: ''
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    enterLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6} className='Art'></Col>
                    <Col span={16} className='modal-content-body'>
                        <Row>
                            <h1 className='form-title'>New User</h1>
                        </Row>
                        <Row>
                            <Form layout='inline' style={{ position: "relative" }} onSubmit={this.handleFormSubmit}>
                                <Form.Item type="text">
                                    <Input
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        name='username'
                                        placeholder='Username'
                                        id='username' />
                                </Form.Item>
                            </Form>
                        </Row>
                        <Row>
                            <Form layout='inline' onSubmit={this.handleFormSubmit}>
                                <Form.Item type="text">
                                    <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name='password'
                                        placeholder='Password'
                                        id='password' />
                                </Form.Item>
                            </Form>
                        </Row>
                        <Row>
                            <Button
                                type='primary'
                                style={{ width: '150px' }}
                                loading={this.state.loading}
                                onClick={this.enterLoading}
                            >
                                Sign In
                            </Button>
                        </Row>
                        <Row>
                            <p className='modal-bottom'>
                                New to EventPull?
                                <span className='signup-link' onClick={this.props.newUser}>Sign Up</span>
                            </p>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NewUser;