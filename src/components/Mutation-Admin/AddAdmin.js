import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "semantic-ui-react";
export default class AddAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminID: "",
      name: "",
      email: "",
      password: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeID(e) {
    this.setState({
      adminID: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
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

  onSubmit(e) {
    e.preventDefault();

    const newData = {
      adminID: this.state.adminID,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post("https://backendcommando.herokuapp.com/api/admin/add", newData).then((res) => {
      console.log(res.data);
    });

    this.props.history.push("/adminview");

    this.setState({
      adminID: "",
      name: "",
      email: "",
      password: "",
    });
  }
  render() {
    return (
      <div style={{ flexDirection: "column", marginTop: 50 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}>Admin Registration</h1>
          <p>Please Enter Admin Information and Click submit</p>
        </div>
        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Admin ID"
            placeholder="ID"
            required
            value={this.state.adminID}
            onChange={this.onChangeID}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Admin name"
            placeholder="Name"
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
            value={this.state.email}
            onChange={this.onChangeEmail}
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
