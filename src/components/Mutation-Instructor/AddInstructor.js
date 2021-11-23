import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";

export default class AddInstructor extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDept = this.onChangeDept.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      mail: "",
      contactNumber: "",
      dept: "",
      title: "",
      password: "",
      errors: {},
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeMail(e) {
    this.setState({
      mail: e.target.value,
    });
  }
  onChangeContact(e) {
    this.setState({
      contactNumber: e.target.value,
    });
  }
  onChangeDept(e) {
    this.setState({
      dept: e.target.value,
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, mail, contactNumber, dept, title, password } = this.state;

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Instructor Name is required" } });
      return;
    }
    if (mail === "") {
      this.setState({
        errors: { mail: "InstructorRoute Email is required" },
      });
      return;
    }
    if (contactNumber === "") {
      this.setState({ errors: { contactNumber: "ContactNumber is required" } });
    }
    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }

    console.log(`Form Submitted`);
    console.log(`Course Name : ${this.state.name}`);
    console.log(`Instructor Name : ${this.state.instructorName}`);
    console.log(`Year : ${this.state.year}`);

    const newUser = {
      name: this.state.name,
      mail: this.state.mail,
      contactNumber: this.state.contactNumber,
      dept: this.state.dept,
      title: this.state.title,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/api/instructor/add", newUser)
      .then((res) => console.log(res.data));

    this.props.history.push("/instructorList");

    // //Clear state after error checking(When click submit button)
    this.setState({
      name: "",
      mail: "",
      contactNumber: "",
      dept: "",
      title: "",
      password: "",
    });
  }
  render() {
    return (
      <div style={{ flexDirection: "column", marginTop: 50 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}>Instructor Registration</h1>
          <p>Please Enter Staff/Instructor Information and Click submit</p>
        </div>
        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="instructor name"
            placeholder="Full Name"
            required
            value={this.state.name}
            onChange={this.onChangeName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Email"
            placeholder="email"
            required
            value={this.state.mail}
            onChange={this.onChangeMail}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="number"
            label=""
            name="instructor contact"
            placeholder="contact"
            required
            value={this.state.contactNumber}
            onChange={this.onChangeContact}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Department"
            placeholder="Department"
            required
            value={this.state.dept}
            onChange={this.onChangeDept}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="instrutor title"
            placeholder="title"
            required
            value={this.state.contactNumber}
            onChange={this.onChangeTitle}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="password"
            label=""
            name="instrutor password"
            placeholder="password"
            required
            value={this.state.password}
            onChange={this.onChangePassword}
          />

          <Button type="submit" color="blue">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
