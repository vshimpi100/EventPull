import React, { Component } from "react";
import { Card } from "antd-mobile";
import { Avatar, Row, Col, Icon, Comment } from "antd";
import "./style.css";

class EventCard extends Component {
    state = {
        total: 0
    };

    handleUpVote = () => {
        this.setState({
            upvotes: this.state.upvotes + 1,
        });
    };

    handleDownVote = () => {
        this.setState({
            downvotes: this.state.downvotes - 1,
        });
    };

    componentDidMount = () => {
        let downvotes = this.props.downvotes;
        let upvotes = this.props.upvotes;

        let totalvotes = upvotes - downvotes;
        this.setState({
            total: totalvotes
        })
    }

    render() {
        return (
            <Card full style={{ width: "80%" }}>
                <Card.Body>
                    <Row>
                        <Col span={1} style={{ textAlign: "center" }}>
                            <Row style={{ fontSize: '18px' }}>
                                <Icon type="caret-up" onClick={this.handleUpVote} />
                            </Row>
                            <Row style={{ fontSize: '18px' }}>
                                <span className="total-votes">{this.state.total} </span>
                            </Row>
                            <Row style={{ fontSize: '18px' }}>
                                <Icon type="caret-down" onClick={this.handleDownVote} />
                            </Row>
                        </Col>
                        <Col span={3} style={{ textAlign: "center" }}>
                            <Avatar shape="square" size={80} src={this.props.image} />
                        </Col>
                        <Col span={20}>
                            <Row>
                                <Col span={22}>
                                    <Row className="card-title">
                                        <span>{this.props.title}</span>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="card-icons">
                                <Col
                                    span={6}
                                    style={{ width: "fit-content" }}
                                    className="card-icon"
                                >
                                    <Row>
                                        <Icon type="calendar" />
                                        <span className="icon-data">{this.props.created}</span>
                                    </Row>
                                </Col>
                                <Col
                                    span={6}
                                    style={{ width: "fit-content" }}
                                    className="card-icon"
                                >
                                    <Row>
                                        <Icon type="environment" />
                                        <span className="icon-data">4.8 mi</span>
                                    </Row>
                                </Col>
                                <Col
                                    span={6}
                                    style={{ width: "fit-content" }}
                                    className="card-icon"
                                >
                                    <Row>
                                        <Icon type="dollar" />
                                        <span className="icon-data">$ {this.props.price.toFixed(2)}</span>
                                    </Row>
                                </Col>
                                <Col
                                    span={6}
                                    style={{ width: "fit-content" }}
                                    className="card-icon"
                                >
                                    <Icon type="message" />
                                    <span className="icon-data">{this.props.comments.length}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Icon type="heart" id="save-button" />
                    <Comment
                        author={<a href="#">{this.props.creator}</a>}
                        datetime={
                            <span>{this.props.date}</span>
                        }
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default EventCard;
