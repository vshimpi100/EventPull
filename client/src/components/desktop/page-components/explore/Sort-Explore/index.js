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
        <Col xs={2}>
          <Nav.Item as="li">
            <Nav.Link href="/home">
              <Row>
                <Col xs={2}>
                  <FaAngleDoubleRight />
                </Col>
                <Col>Explore</Col>
              </Row>
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={6}>
          <Row className="text-right">
            <Col>
              <Nav.Item as="li" id="sort-header">
                <Nav.Link>Sort:</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>Best</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>Date</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>Distance</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>Price</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>Comments</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col className="text-center">
            <Nav.Item as="li">
              <Nav.Link>
                <FaArrowUp />
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col className="text-center">
            <Nav.Item as="li">
              <Nav.Link>
                <FaArrowDown />
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </Nav>
    );
  }
}
