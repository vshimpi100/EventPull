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
//   FaArrowUp,
//   FaArrowDown
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
                <Col>Nearby</Col>
              </Row>
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={6}>
          <Row className="text-right">
            <Col>
              <Nav.Item as="li" id="sort-header">
                <Nav.Link>Distance:</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>0.5 mi</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>1 mi</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>5 mi</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>10 mi</Nav.Link>
              </Nav.Item>
            </Col>
            <Col>
              <Nav.Item as="li">
                <Nav.Link>25 mi</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Col>
        {/* <Col xs={2}>
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
        </Col> */}
      </Nav>
    );
  }
}
