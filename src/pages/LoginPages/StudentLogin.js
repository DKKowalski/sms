import React, { Component } from "react";
import student from "../../assets/students-cap.png";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      studentID: "",
      password: "",
      userType: "",
    };
  }
  onChangeID = (e) => {
    this.setState({
      studentID: e.target.value,
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

    const new_Student = {
      studentID: this.state.studentID,
      password: this.state.password,
    };

    if (!new_Student.studentID) {
      alert("Enter Student ID");
    } else if (!new_Student.password) {
      alert("Enter Password");
    } else if (!new_Student.studentID && !new_Student.password) {
      alert("Enter Admin Credentials");
    } else {
      axios
        .post("https://backendcommando.herokuapp.com/api/instructor/login", new_Student)
        .then((res) => {
          if (res.status === 200) {
            alert("Login Success! Welcome, " + this.state.studentID);
            this.props.history.push("/student/dashboard");
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
              src={student}
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              type="text"
              label="Student ID"
              name="student"
              placeholder="id..."
              required
              icon="user circle"
              iconPosition="left"
              value={this.state.studentID}
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
            <Button type="submit" className="btn btn-primary" color="blue">
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default StudentLogin;
