import React, { Component } from "react";
import { Card } from "antd-mobile";
import { Avatar, Row, Col, Icon, Comment, Tooltip } from "antd";
import moment from "moment";
import "./style.css";

class EventCard extends Component {
  state = {
    upvotes: 0,
    downvotes: 0,
    total: 0
  };

  handleUpVote = () => {
    this.setState({
      upvotes: this.state.upvotes + 1,
      total: this.state.total + 1
    });
  };

  handleDownVote = () => {
    this.setState({
      downvotes: this.state.downvotes - 1,
      total: this.state.total - 1
    });
  };

  handleDownVote = () => {
    this.setState({
      downvotes: this.state.downvotes - 1,
      total: this.state.total - 1
    });
  };

  render() {
    return (
      <Card full style={{ width: "80%" }}>
        <Card.Body>
          <Row>
            <Col span={1} style={{ textAlign: "center" }}>
              <Row>
                <Icon type="caret-up" onClick={this.handleUpVote} />
              </Row>
              <Row>
                <span className="total-votes">{this.state.total}</span>
              </Row>
              <Row>
                <Icon type="caret-down" onClick={this.handleDownVote} />
              </Row>
            </Col>
            <Col span={3} style={{ textAlign: "center" }}>
              <Avatar shape="square" size={64} src={this.props.image} />
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
                    <span className="icon-data">4/30</span>
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
                    <span className="icon-data">$ 299.99</span>
                  </Row>
                </Col>
                <Col
                  span={6}
                  style={{ width: "fit-content" }}
                  className="card-icon"
                >
                  <Icon type="message" />
                  <span className="icon-data">59</span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Icon type="heart" id="save-button" />
          <Comment
            author={<a href="#">zlmartin</a>}
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;
