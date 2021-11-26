import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
export default class UpdateInstructor extends Component {
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

  componentDidMount() {
    axios
      .get(
        "https://backendcommando.herokuapp.com/api/instructor/edit/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
          mail: response.data.mail,
          dept: response.data.dept,
          title: response.data.title,
          contactNumber: response.data.contactNumber,
          password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    const updateInstructor = {
      name: this.state.name,
      mail: this.state.mail,
      contactNumber: this.state.contactNumber,
      dept: this.state.dept,
      title: this.state.title,
      password: this.state.password,
    };

    axios
      .post(
        "https://backendcommando.herokuapp.com/api/instructor/update/" +
          this.props.match.params.id,
        updateInstructor
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/instructorList");
  }
  render() {
    return (
      <div style={{ flexDirection: "column", marginTop: 50 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> Update Instructor Record </h1>
        </div>

        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="NAME"
            name="instructor name"
            value={this.state.name}
            onChange={this.onChangeName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="EMAIL"
            name="Email"
            value={this.state.mail}
            onChange={this.onChangeMail}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="number"
            label="CONTACT"
            name="instructor contact"
            value={this.state.contactNumber}
            onChange={this.onChangeContact}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="DEPARTMENT"
            name="Department"
            value={this.state.dept}
            onChange={this.onChangeDept}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label="TITLE"
            name="instrutor title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="password"
            label="PASSWORD"
            name="instrutor password"
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
