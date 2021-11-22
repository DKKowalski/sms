import React, { Component } from "react";
import { Form, Input, Button, Dropdown } from "semantic-ui-react";
import axios from "axios";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentName: "",
      studentID: "",
      email: "",
      password: "",
      nic: "",
      course: "",
      courseList: [],
      errors: {},
    };
  }

  onChangeStudentName(e) {
    this.setState({
      studentName: e.target.value,
    });
  }
  onChangeStudentID(e) {
    this.setState({
      studentID: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeNic(e) {
    this.setState({
      nic: e.target.value,
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/course/")
      .then((response) => {
        this.setState({ courseList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { studentName, studentID, email, password, nic, course } = this.state;

    //Check for errors
    if (studentName === "") {
      this.setState({ errors: { studentName: "student Name is required" } });
      return;
    }
    if (studentID === "") {
      this.setState({ errors: { studentID: "student ID is required" } });
      return;
    }
    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is required" },
      });
      return;
    }

    if (nic === "") {
      this.setState({
        errors: { nic: "NIC number is required" },
      });
      return;
    }
    if (nic.length < 10 || nic.length > 11) {
      this.setState({
        errors: { nic: "NIC number is not correct" },
      });
      return;
    }
    if (course === "") {
      this.setState({
        errors: { course: "Course is required" },
      });
      return;
    }

    console.log(`Form Submitted`);
    console.log(`student Name : ${this.state.studentName}`);
    console.log(`student ID : ${this.state.studentID}`);
    console.log(`Email : ${this.state.email}`);
    console.log(`password : ${this.state.password}`);
    console.log(`NIC Number : ${this.state.nic}`);
    console.log(`Course Name : ${this.state.course}`);

    const newUser = {
      studentName: this.state.studentName,
      studentID: this.state.studentID,
      email: this.state.email,
      password: this.state.password,
      nic: this.state.nic,
      course: this.state.course,
    };

    axios
      .post("http://localhost:4000/api/student/add", newUser)
      .then(
        (res) => console.log(res.data),
        alert("You are successfully registered")
      );

    //Clear state after error checking(When click submit button)
    this.setState({
      studentName: "",
      studentID: "",
      email: "",
      password: "",
      nic: "",
      course: "",
    });
  }
  render() {
    return (
      <div style={{ flexDirection: "column" }} className="container">
        <div className="headtext">
          <h1 style={{ color: "black" }}>Student Registration</h1>
          <p>Please Enter Student Information and Click submit</p>
        </div>
        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="student name"
            placeholder="Full Name"
            required
            value={this.state.studentName}
            onChange={this.onChangeStudentName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="student index number"
            placeholder="Student ID"
            required
            value={this.state.studentID}
            onChange={this.onChangeStudentID}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="student email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.onChangeStudentEmail}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="student password"
            placeholder="password"
            required
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <Form.Field>
            <Dropdown placeholder="Class" required fluid selection>
              <Dropdown.Menu>
                <Dropdown.Item text="Creche" />
                <Dropdown.Item text="Nursery" />
                <Dropdown.Item text="Kindergarten" />
                <Dropdown.Item text="Class 1" />
                <Dropdown.Item text="Class 2" />
                <Dropdown.Item text="Class 3" />
              </Dropdown.Menu>
            </Dropdown>
          </Form.Field>

          <Button type="submit" color="blue">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
