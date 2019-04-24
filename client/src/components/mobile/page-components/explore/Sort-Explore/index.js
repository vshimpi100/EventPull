import React, { Component } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import { Icon as WebIcon } from "antd";
import { SegmentedControl, Icon, Flex, Tag, WhiteSpace } from "antd-mobile";

// import "./style.css";
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
  // state = { activeItem: "closest" };

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    //   const { activeItem } = this.state;

    return (
      <div>
        <Flex justify="center" style={{marginTop:"5px"}}>
          <Tag>Sort</Tag>
          <SegmentedControl
            justify="center"
            className="inline"
            selectedIndex={0}
            values={[
              <FaStar key="1" />,
              <FaCalendarAlt key="2" />,
              <FaMapMarkerAlt key="3" />,
              <FaDollarSign key="4" />,
              <FaComment key="5" />
            ]}
            style={{ width: "80%"}}
          />
          <Tag>
            <FaArrowDown />
          </Tag>
        </Flex>
      </div>
    );
  }
}
