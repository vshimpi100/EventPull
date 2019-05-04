import React, { Component } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "./style.css";
import auth from "../../../../../utils/auth";

class Login extends Component {
  state = {
    username: null,
    password: null,
    email: null,
    validationCode: null,
    loading: false
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.email) {
      auth.signIn(this.state.username, this.state.password).then(res => {
        console.log(res, "this is on the frontend");
        console.log("validation status", this.props.isPendingValidation);
        this.props.handleLoginSubmit(res);
        this.props.handleCancel();
        this.setState({
          username: "",
          password: "",
          email: ""
        });
      });
    } else if (!this.state.validationCode) {
      auth
        .signUp(this.state.username, this.state.password, this.state.email)
        .then(res => {
          console.log(res, "New user created");
          this.props.handleValidationPending();
        });
    } else {
      auth
        .confirmSignUp(this.state.username, this.state.code)
        .then(res => {
          auth.signIn(this.state.username, this.state.password).then(res => {
            this.props.handleLoginSubmit(res);
            this.props.handleCancel();
            this.setState({
              username: "",
              password: "",
              email: ""
            });
          });
          this.props.handleValidationPending();
        })
        .catch(err => console.log(err));
    }
  };

  resendValidation = () => {
    auth
      .resendConfirmation(this.state.username)
      .then(console.log("email sent"))
      .catch(err => console.log(err));
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
              <h1 className="form-title">
                {!this.props.isPendingValidation
                  ? this.props.isNewUser
                    ? "Sign Up"
                    : "Log In"
                  : "Enter Validation Code"}
              </h1>
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
                {!this.props.isPendingValidation ? (
                  <div>
                    <Form.Item type="text">
                      <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                        id="password"
                      />
                    </Form.Item>
                    {this.props.isNewUser ? (
                      <Form.Item type="text">
                        <Input
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          name="email"
                          placeholder="Email"
                          id="email"
                        />
                      </Form.Item>
                    ) : null}
                  </div>
                ) : (
                  <Input
                    value={this.state.validationCode}
                    onChange={this.handleInputChange}
                    name="validationCode"
                    placeholder="Validation Code"
                    id="validationCode"
                  />
                )}

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "150px" }}
                  loading={this.state.loading}
                  onClick={this.enterLoading}
                >
                  {!this.props.isPendingValidation
                    ? this.props.isNewUser
                      ? "Sign Up"
                      : "Log In"
                    : "Confirm Code"}
                </Button>
              </Form>
            </Row>
            <Row>
              {!this.props.isPendingValidation ? (
                <p className="modal-bottom">
                  New to EventPull?
                  <span
                    className="signup-link"
                    onClick={this.props.handleNewUser}
                  >
                    {this.props.isNewUser ? "Log In" : "Sign Up"}
                  </span>
                </p>
              ) : (
                <p className="modal-bottom">
                  Can't find your code?
                  <span
                    className="signup-link"
                    onClick={this.resendValidation}
                  >
                    Send Again
                  </span>
                </p>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
