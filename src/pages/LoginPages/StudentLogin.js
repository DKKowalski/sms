import React, { Component } from "react";
import student from "../../assets/students-cap.png";
import { Form, Input, Button } from "semantic-ui-react";

class StudentLogin extends Component {
  constructor(props) {
    super(props);
  }

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
              src={student}
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              type="number"
              label="Student ID"
              name="number"
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

export default StudentLogin;
