import React, { Component } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "./style.css";
import auth from "../../../../../utils/auth";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loading: false
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
    auth.signIn(this.state.username, this.state.password);
    this.props.handleCancel();
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  enterLoading = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={6} className="Art" />
          <Col span={16} className="login-content-body">
            <Row>
              <h1 className="form-title">Sign In</h1>
            </Row>
            <Row>
              <Form
                layout="inline"
                style={{ position: "relative" }}
                onSubmit={this.handleFormSubmit}
              >
                <Form.Item type="text">
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Username"
                    id="username"
                  />
                </Form.Item>
                <Form.Item type="text">
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
                    id="password"
                  />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "150px" }}
                  loading={this.state.loading}
                  onClick={this.enterLoading}
                >
                  Sign In
                </Button>
              </Form>
            </Row>
            <Row>
              <p className="modal-bottom">
                New to EventPull?
                <span className="signup-link">Sign Up</span>
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
