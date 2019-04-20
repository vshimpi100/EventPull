import React, { Component } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import "./style.css";
import {
  FaAngleDoubleRight,
  // FaStar,
  // FaCalendar,
  // FaMap,
  // FaDollarSign,
  // FaComment,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

export default class SortExplore extends Component {
  // state = { activeItem: "closest" };

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    //   const { activeItem } = this.state;

    return (
      <Nav defaultActiveKey="/home" as="ul" id="explore-sort">
        <Col xs={6}>
          <Nav.Item as="li">
            <Nav.Link href="/home">
              Upcoming
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={6}>
          <Nav.Item as="li">
            <Nav.Link href="/home">
              Past Events
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Nav>
    );
  }
}
