import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import './style.css';

const { TextArea } = Input;

class CreateEvent extends Component {

    state = {
        title: '',
        description: '',
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24} className='create-event-content-body'>
                        <Row style={{ borderBottom: '1px solid rgba(0,0,0,.1)' }}>
                            <h1 className='create-event-title'>Create an Event</h1>
                        </Row>
                        <Row style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                            <Form layout='inline' style={{ position: "relative" }} onSubmit={this.handleFormSubmit}>
                                <Form.Item type="text">
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name='title'
                                        placeholder='Title'
                                        id='title' />
                                </Form.Item>
                            </Form>
                        </Row>
                        <Row style={{ textAlign: 'center' }}>
                            <Form layout='inline' style={{ position: "relative" }} onSubmit={this.handleFormSubmit}>
                                <Form.Item type="text">
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name='title'
                                        placeholder='Event Location'
                                        id='location' />
                                </Form.Item>
                            </Form>
                        </Row>
                        <Row style={{ textAlign: 'center' }}>
                            <TextArea
                                rows={4}
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name='description'
                                placeholder='Description of Event'
                                id='description'
                            />
                        </Row>
                        <Row style={{ textAlign: 'right' }}>
                            <Button
                                type='primary'
                                className='event-post-button'
                                loading={this.state.loading}
                                onClick={this.enterLoading}
                            >
                                Post
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default CreateEvent;