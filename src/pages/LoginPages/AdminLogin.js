import React, { Component } from "react";
import "./AdminLogin.css";
import admin from "../../assets/admin.png";
import { Form, Input, Button } from "semantic-ui-react";
class AdminLogin extends Component {
  render() {
    return (
      <div>
        <div className="loginForm">
          <Form className="formContainer">
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
              type="number"
              label="Admin ID"
              name="text"
              placeholder="id..."
              required
              icon="user circle"
              iconPosition="left"
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
