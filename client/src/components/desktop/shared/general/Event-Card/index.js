import React, { Component } from "react";
import { Card } from "antd-mobile";
import { Avatar, Row, Col, Icon, Comment } from "antd";
import "./style.css";
import moment from "moment";
import API from "../../../../../utils/API";

class EventCard extends Component {
    state = {
        currentVote: 0,
        total: 0,
        upvote: 0,
        downvote: 0,
        save_theme: 'outlined',
        saved: false
    };

    componentDidMount = () => {
        // vote calculation
        let downvotes = this.props.downvotes;
        let upvotes = this.props.upvotes;
        let totalvotes = upvotes - downvotes;
        this.setState({
            total: totalvotes
        });
    }

    componentWillReceiveProps = () => {

        // check to see if the user has already saved this event
        if (this.props.user) {
            // console.log(this.props);
            // console.log(this.props.user.data.saved)
            this.props.user.data.saved.forEach(element => {
                if (this.props.id === element._id) {
                    console.log("the user has already saved", this.props.id)
                    this.setState({
                        save_theme: "filled",
                        saved: true
                    });
                } else {
                    this.setState({
                        save_theme: "outlined",
                        saved: false
                    });
                };
            })
        }
    };

    handleUpVote = () => {
        if (this.state.currentVote === 0) {
            this.setState({
                currentVote: 1
            })
            this.props.handleVote('upvote', this.props.id)
        } else if (this.state.currentVote === 1) {
            this.setState({
                currentVote: 0
            })
            this.props.handleVote('remove upvote', this.props.id)
        }
    };

    handleDownVote = () => {
        if (this.state.currentVote === 0) {
            this.setState({
                currentVote: -1
            })
            this.props.handleVote('downvote', this.props.id)
        } else if (this.state.currentVote === -1) {
            this.setState({
                currentVote: 0
            })
            this.props.handleVote('remove downvote', this.props.id)
        }
    };

    handleMouseEnter = () => {
        if (this.state.saved === false) {
            this.setState({
                save_theme: "filled"
            });
        }
    };

    handleMouseLeave = () => {
        if (this.state.saved === false) {
            this.setState({
                save_theme: "outlined"
            });
        }
    };

    handleMoment = (date, indicator) => {
        if (indicator === "date") {
            return moment(date).format("L");
        } else if (indicator === "date created") {
            return moment(date).fromNow();
        }
    };

    handleClickEvent = () => {
        const event = {
            //   title: this.props.title,
            //   image: this.props.image,
            //   date: this.props.date,
            //   creator: this.props.creator,
            //   date_created: this.props.date_created,
            //   price: this.props.price,
            //   comments: this.props.comments,
            //   upvotes: this.props.date,
            //   downvotes: this.props.date
            id: this.props.id
        };
        if (this.state.saved === false) {
            this.setState({
                save_theme: "filled",
                saved: true
            });
            this.props.handleSave(event, "save");
        } else {
            this.setState({
                save_them: "outlined",
                saved: false
            });
            this.props.handleSave(event, "remove");
        }
    };

    render() {
        return (
            <Card full>
                <Card.Body>
                    <Row>
                        <Col span={1} style={{ textAlign: "center" }}>
                            <Row style={{ fontSize: '20px' }}>
                                <Icon type="caret-up" className='vote-icon' onClick={this.handleUpVote} />
                            </Row>
                            <Row style={{ fontSize: '16px' }}>
                                <span className="total-votes">{this.state.total} </span>
                            </Row>
                            <Row style={{ fontSize: '20px' }}>
                                <Icon type="caret-down" className='vote-icon' onClick={this.handleDownVote} />
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
                                        <span className="icon-data">{this.handleMoment(this.props.date, 'date')}</span>
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
                                        <span className="icon-data">{this.props.price.toFixed(2) < 0.01 ? "Free" : `$ ${this.props.price.toFixed(2)}`}</span>
                                    </Row>
                                </Col>
                                <Col
                                    span={6}
                                    style={{ width: "fit-content" }}
                                    className="card-icon"
                                >
                                    <Icon type="message" />
                                    <span className="icon-data">{this.props.commentLength}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Icon
                        type="heart"
                        id="save-button"
                        style={{ color: "#FF4400" }}
                        theme={this.state.save_theme}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onClick={this.handleClickEvent}
                    />
                    <Comment
                        className="event-card-comment"
                        author={<a href="#">{this.props.creator}</a>}
                        datetime={
                            <span>
                                {this.handleMoment(this.props.date_created, "date created")}
                            </span>
                        }
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default EventCard;
