import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Radio, DatePicker } from 'antd';
import API from '../../../../../utils/API';
import './style.css';

const { TextArea } = Input;

class CreateEvent extends Component {

    state = {
        title: null,
        description: null,
        date: null,
        creator: this.props.user,
        creatorID: this.props.userID,
        price: null,
        image_url: null,
        event_link: null,
        ticket_link: null,
        value: 1
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let newEvent = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            creator: this.state.creator,
            creatorID: this.state.creatorID,
            event_link: this.state.event_link,
            ticket_link: this.state.ticket_link
        };

        if (this.state.image_url) {
            newEvent = Object.assign(newEvent, {image_url: this.state.image_url});
        } else if (this.state.price) {
            newEvent = Object.assign(newEvent, {price: this.state.price});
        }

        console.log(newEvent);

        API.createEvent(newEvent)
            .then(res => {
                alert(`${res.data.title} has been successfuly created!`)
                this.setState({
                    title: null,
                    description: null,
                    date: null,
                    price: null,
                    image_url: null,
                    event_link: null,
                    ticket_link: null
                })
                this.props.onCancel();
                this.props.loadEvents();
            })
            .catch(err => console.log(err))
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    onChange = (date) => {
        console.log(date._d);
        this.setState({
            date: date._d
        });
    }

    handleInputTabs = (value) => {
        switch (value) {
            case 1:
                this.setState({
                    value: 1
                });
                break;
            case 2:
                this.setState({
                    value: 2
                });
                break;
            case 3:
                this.setState({
                    value: 3
                });
                break;
        }
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
                            <Radio.Group defaultValue="1" buttonStyle="solid" className='create-event-tabs'>
                                <Radio.Button className='create-event-input-tab' value="1" onClick={() => this.handleInputTabs(1)}>1.0 Post</Radio.Button>
                                <Radio.Button className='create-event-input-tab' value="2" onClick={() => this.handleInputTabs(2)}>2.0 Image</Radio.Button>
                                <Radio.Button className='create-event-input-tab' value="3" onClick={() => this.handleInputTabs(3)}>3.0 Link</Radio.Button>
                            </Radio.Group>
                        </Row>
                        <Row style={{ margin: '0.5rem auto 0 auto', width: '500px' }}>
                            <Form layout='inline' style={{ position: "relative" }} onSubmit={this.handleFormSubmit}>
                                <Form.Item type="text">
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name='title'
                                        placeholder='Title'
                                        id='title' />
                                </Form.Item>
                                {this.state.value === 1 ?
                                    <Form.Item>
                                        <DatePicker id='date' onChange={this.onChange} />
                                    </Form.Item> : null}
                                {this.state.value === 1 ?
                                    <Form.Item type="text">
                                        <Input
                                            value={this.state.price}
                                            onChange={this.handleInputChange}
                                            name='price'
                                            placeholder='Event Price (optional)'
                                            id='price' />
                                    </Form.Item> : null}
                                {this.state.value === 1 ?
                                    <Form.Item type="text">
                                        <Input
                                            value={this.state.location}
                                            onChange={this.handleInputChange}
                                            name='location'
                                            placeholder='Event Location'
                                            id='location' />
                                    </Form.Item> : null}
                                {this.state.value === 1 ?
                                    <TextArea
                                        rows={4}
                                        value={this.state.description}
                                        onChange={this.handleInputChange}
                                        name='description'
                                        placeholder='Description of Event'
                                        id='description'
                                    /> : null}
                                {this.state.value === 2 ?
                                    <Form.Item type="text">
                                        <Input
                                            value={this.state.image_url}
                                            onChange={this.handleInputChange}
                                            name='image_url'
                                            placeholder='Event Image URL (optional)'
                                            id='image_url' />
                                    </Form.Item> : null}
                                {this.state.value === 3 ?
                                    <Form.Item type="text">
                                        <Input
                                            value={this.state.event_link}
                                            onChange={this.handleInputChange}
                                            name='event_link'
                                            placeholder='Event Page URL'
                                            id='event_link' />
                                    </Form.Item> : null}
                                {this.state.value === 3 ?
                                    <Form.Item type="text">
                                        <Input
                                            value={this.state.ticket_link}
                                            onChange={this.handleInputChange}
                                            name='ticket_link'
                                            placeholder='Event Ticket Link'
                                            id='ticket_link' />
                                    </Form.Item> : null}
                                {/* {this.state.value === 2 ? <Dragger /> : null} */}
                                <Row style={{ textAlign: 'right' }}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        className='event-post-button'
                                        loading={this.state.loading}
                                        onClick={this.enterLoading}
                                    >
                                        Post
                                    </Button>
                                </Row>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default CreateEvent;