import React, { Component } from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import { Form, Input, Menu, Dropdown } from "antd";
import { NavBar } from "antd-mobile";
import { FaSearch, FaUser } from "react-icons/fa";
import "./style.css";

class Nav extends Component {
  state = {
    search: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.search);
    this.setState({
      search: ""
    });
  };

  componentDidUpdate=()=>{
    console.log("received user",this.props.user)
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <NavBar
        className="nav-web"
        leftContent={[<h1 className="navbar-brand">EventPull</h1>]}
        rightContent={[
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "item active" : "item"
            }
          >
            Explore
          </Link>,
          <Link
            to="/nearby"
            className={
              window.location.pathname === "/nearby" ? "item active" : "item"
            }
          >
            Nearby
          </Link>,
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved" ? "item active" : "item"
            }
          >
            Saved
          </Link>,
          <Dropdown
            overlay={<DropdownMenu user={this.props.user}/>}
            trigger={["click"]}
            user={this.props.user}
          >
            <a className="ant-dropdown-link item" href="#">
              <FaUser />
            </a>
          </Dropdown>
        ]}
      >
        <Form
          layout="inline"
          style={{ position: "relative" }}
          onSubmit={this.handleFormSubmit}
        >
          <Form.Item type="text">
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Search EventPull"
              id="search-bar"
            />
          </Form.Item>
          <FaSearch id="search-button" />
        </Form>
      </NavBar>
    );
  }
}

export default Nav;
