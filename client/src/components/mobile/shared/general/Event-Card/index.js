import React, { Component } from "react";
import { Card, WhiteSpace, Tag, Flex, Badge } from "antd-mobile";
import {
  FaAngleDoubleRight,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaComment,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import moment from "moment";
import { Icon, Comment, Tooltip } from "antd";

export default class SortExplore extends Component {
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

  render() {

    return (
      <div>
        <WhiteSpace size="sm" />
        <Card full>
          <Card.Body style={{ paddingTop: "6px" }}>
            <Flex justify="between" align="center">
              <span className="inline">
                <Flex justify="center">
                  <Icon type="caret-up" onClick={this.handleUpVote} />
                </Flex>
                <Flex justify="center">
                  <div className="total-votes">{this.state.total}</div>
                </Flex>
                <Flex justify="center">
                  <Icon type="caret-down" onClick={this.handleDownVote} />
                </Flex>
              </span>
              <span
                className="inline"
                style={{ margin: "10px", verticalAlign: "top" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </span>
              <span className="inline">
                <img src="https://via.placeholder.com/75" />
              </span>
            </Flex>
          </Card.Body>
          <Card.Footer
            content={
              <div>
                <Flex justify="around" wrap="wrap" align="center">
                  <Tag
                    className="inline"
                    style={{ padding: "1,1px", margin: "2px" }}
                  >
                    <Icon type="calendar" />
                    <span className="icon-data">4/30</span>
                  </Tag>
                  <Tag
                    className="inline"
                    style={{ padding: "1,1px", margin: "2px" }}
                  >
                    <Icon type="environment" />
                    <span className="icon-data">4.8 mi</span>
                  </Tag>
                  <Tag
                    className="inline"
                    style={{ padding: "1,1px", margin: "2px" }}
                  >
                    <span>$ 9.99</span>
                  </Tag>
                  <Tag
                    className="inline"
                    style={{ padding: "1,1px", margin: "2px" }}
                  >
                    <Icon type="message" />
                    <span className="icon-data">59</span>
                  </Tag>
                </Flex>
                <Flex justify="end" align="center" style={{ marginTop: "4px" }}>
                  <Badge className="inline" text={"loremipsum"} style={{zIndex: 1}}/>
                  <div className="inline">
                    <Comment
                      className="mobile"
                      author={<a href="#">zlmartin</a>}
                      datetime={
                        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                          <span>{moment().fromNow()}</span>
                        </Tooltip>
                      }
                    />
                  </div>
                </Flex>
              </div>
            }
          />
        </Card>
      </div>
    );
  }
}
