import React, { Component } from "react";
import { Form, Input, Button, Dropdown } from "semantic-ui-react";
import axios from "axios";
export default class UpdateStudent extends Component {
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

  componentDidMount() {
    axios
      .get("http://backendcommando.herokuapp.com/api/student/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          studentName: response.data.studentName,
          studentID: response.data.studentID,
          email: response.data.email,
          password: response.data.password,
          nic: response.data.nic,
          course: response.data.course,
          //        year: response.data.year
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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

  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const updatedStudent = {
      studentName: this.state.studentName,
      studentID: this.state.studentID,
      email: this.state.email,
      password: this.state.password,
      nic: this.state.nic,
      course: this.state.course,
    };

    axios
      .post(
        "http://backendcommando.herokuapp.comapi/student/update/" +
          this.props.match.params.id,
        updatedStudent
      )
      .then(
        (res) => console.log(res.data),
        alert("student updated successfully")
      );

    this.props.history.push("/");
  }
  render() {
    return (
      <div style={{ flexDirection: "column", marginTop: 50 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> Update Student Record </h1>
        </div>

        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="NAME"
            name="student name"
            value={this.state.studentName}
            onChange={this.onChangeStudentName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="ID NUMBER"
            name="student index number"
            value={this.state.studentID}
            onChange={this.onChangeStudentID}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="Email"
            name="student email"
            value={this.state.email}
            onChange={this.onChangeStudentEmail}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="PASSWORD"
            name="student password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <Form.Field>
            <Dropdown placeholder="Class" fluid selection>
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
