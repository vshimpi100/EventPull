import React, { Component } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import { Icon as WebIcon } from "antd";
import { SegmentedControl, Icon, Flex, Tag, WhiteSpace } from "antd-mobile";
import "./style.css";
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

export default class SortExplore extends Component {
  state = {
    current: 0,
    active: "descending"
  };

  handleClick = e => {
    console.log(e.nativeEvent.selectedSegmentIndex);
    if (
      e.nativeEvent.selectedSegmentIndex === "hidden-bar" ||
      !e.nativeEvent.selectedSegmentIndex
    ) {
    } else {
      this.setState({
        current: e.nativeEvent.selectedSegmentIndex
      });
    }
  };

  handleActiveClass = () => {
    if (this.state.active === "descending") {
      this.setState({
        active: "ascending"
      });
    } else {
      this.setState({
        active: "descending"
      });
    }
  };

  render() {
    return (
      <div>
        <Flex justify="center" style={{ marginTop: "5px" }}>
          <Tag>Sort</Tag>
          <SegmentedControl
            justify="center"
            className="inline"
            selectedIndex={this.state.current}
            onChange={this.handleClick}
            values={[
              <FaStar key="1" />,
              <FaCalendarAlt key="2" />,
              <FaMapMarkerAlt key="3" />,
              <FaDollarSign key="4" />,
              <FaComment key="5" />
            ]}
            style={{ width: "80%" }}
          />
          <Tag>
            <WebIcon
              type={
                this.state.active === "descending" ? "arrow-down" : "arrow-up"
              }
              className="sort-order"
              onClick={this.handleActiveClass}
            />
          </Tag>
        </Flex>
      </div>
    );
  }
}
