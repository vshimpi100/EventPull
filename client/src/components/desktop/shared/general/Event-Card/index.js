import React, { Component } from 'react';
import { Card } from 'antd-mobile';
import { Avatar, Row, Col, Icon, Comment, Tooltip } from 'antd';
import moment from 'moment';
import './style.css';

class EventCard extends Component {

    state = {
        upvotes: 0,
        downvotes: 0,
        total: 0,
    }

    handleUpVote = () => {
        this.setState({
            upvotes: this.state.upvotes + 1,
            total: this.state.total + 1
        });
    }

    handleDownVote = () => {
        this.setState({
            downvotes: this.state.downvotes - 1,
            total: this.state.total - 1
        });
    }

    render() {
        return (
            <Card full style={{ width: "70%" }}>
                <Card.Body>
                    <Row>
                        <Col span={1} style={{ textAlign: 'center' }}>
                            <Row>
                                <Icon type="caret-up" onClick = {this.handleUpVote} />
                            </Row>
                            <Row>
                                <span className='total-votes'>{this.state.total}</span>
                            </Row>
                            <Row>
                                <Icon type="caret-down" onClick = {this.handleDownVote} />
                            </Row>
                        </Col>
                        <Col span={3} style={{ textAlign: 'center' }}>
                            <Avatar shape='square' size={64} src='https://via.placeholder.com/150' />
                        </Col>
                        <Col span={20}>
                            <Row>
                                <Col span={22}>
                                    <Row>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                    </Row>
                                </Col>
                                <Icon type="export" id="save-button" />
                            </Row>
                            <Row>
                                <Col span={4}>
                                    <Row>
                                        <Icon type="calendar" /><span className='icon-data'>4/30</span>
                                    </Row>
                                </Col>
                                <Col span={4}>
                                    <Row>
                                        <Icon type="environment" /><span className='icon-data'>4.8 mi</span>
                                    </Row>
                                </Col>
                                <Col span={4}>
                                    <Row>
                                        <Icon type="dollar" /><span className='icon-data'>$ 299.99</span>
                                    </Row>
                                </Col>
                                <Col span={4}>
                                    <Icon type="message" /><span className='icon-data'>59</span>
                                </Col>
                                <Comment
                                    className="web"
                                    author={<a href='#'>zlmartin</a>}
                                    datetime={(
                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                            <span>{moment().fromNow()}</span>
                                        </Tooltip>
                                    )}
                                />
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default EventCard;