import React, { Component } from "react";
import instructor from "../../assets/instructor.png";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
class instructorLogin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      instructorID: "",
      password: "",
      userType: "",
    };
  }
  onChangeID = (e) => {
    this.setState({
      instructorID: e.target.value,
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

    const new_Instructor = {
      instructorID: this.state.instructorID,
      password: this.state.password,
    };

    if (!new_Instructor.instructorID) {
      alert("Enter Admin ID");
    } else if (!new_Instructor.password) {
      alert("Enter Password");
    } else if (!new_Instructor.instructorID && !new_Instructor.password) {
      alert("Enter Admin Credentials");
    } else {
      axios
        .post("http://backendcommando.herokuapp.com/api/instructor/login", new_Instructor)
        .then((res) => {
          if (res.status === 200) {
            alert("Login Success! Welcome, " + this.state.instructorID);
            this.props.history.push("/instructor/dashboard");
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
                padding: 1,
                objectFit: "contain",
              }}
              src={instructor}
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              type="text"
              label="Staff ID"
              name="staff"
              placeholder="id..."
              required
              icon="user circle"
              iconPosition="left"
              value={this.state.instructorID}
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

export default instructorLogin;
