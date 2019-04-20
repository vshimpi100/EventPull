import React, { Component } from "react";
import { Card, WhiteSpace, Tag } from "antd-mobile";
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
        <WhiteSpace size="sm" />
        <Card full>
          <Card.Body>
            <div>This is content of `Card`</div>
          </Card.Body>
          <Card.Footer
            content={
              <div>
                <Tag disabled>
                  <FaCalendarAlt />
                  4/11
                </Tag>
                <Tag disabled>
                  <FaMapMarkerAlt />
                  2.1 mi
                </Tag>
                <Tag disabled>
                  <FaDollarSign />
                  29.99
                </Tag>
                <Tag disabled>
                  <FaComment />
                  381
                </Tag>
              </div>
            }
          />
        </Card>
      </div>
    );
  }
}
