import React, { Component } from "react";
import "./AdminLogin.css";
import admin from "../../assets/admin.png";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      adminID: "",
      email: "",
      password: "",
      userType: "",
    };
  }
  onChangeID = (e) => {
    this.setState({
      adminID: e.target.value,
    });
  };

  onChangeUserType = (e) => {
    this.setState({
      userType: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const new_admin = {
      adminID: this.state.adminID,
      password: this.state.password,
    };

    if (!new_admin.adminID) {
      alert("Enter Admin ID");
    } else if (!new_admin.password) {
      alert("Enter Password");
    } else if (!new_admin.adminID && !new_admin.password) {
      alert("Enter Admin Credentials");
    } else {
      axios
        .post("http://backendcommando.herokuapp.com/api/admin/login", new_admin)
        .then((res) => {
          if (res.status === 200) {
            alert("Login Success! Welcome, " + this.state.adminID);
            this.props.history.push("/admin/dashboard");
          } else {
            alert("Login Failed! Please try again!");
          }
        });
    }
  };
  render() {
    return (
      <div>
        <div className="loginForm">
          <Form onSubmit={this.onSubmit} className="formContainer">
            <img
              style={{
                margin: "auto",
                width: 100,
                height: 100,
                border: "solid",
                borderRadius: 100,
                padding: 10,
              }}
              src={admin}
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              type="text"
              label="Admin ID"
              name="admin"
              placeholder="id..."
              required
              icon="user circle"
              iconPosition="left"
              value={this.state.adminID}
              onChange={this.onChangeID}
            />

            <Form.Field
              id="form-input-control-password"
              control={Input}
              type="password"
              label="Password"
              name="password"
              placeholder="password..."
              required
              icon="lock"
              iconPosition="left"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <Button type="submit" color="blue">
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
