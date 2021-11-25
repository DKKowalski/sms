import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "semantic-ui-react";
export default class AddAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: "",
      dueDate: "",
      errors: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeModuleName = this.onChangeModuleName.bind(this);
    this.onChangeModulestatus = this.onChangeModulestatus.bind(this);
    this.onChangeExamDay = this.onChangeExamDay.bind(this);
  }

  onChangeModuleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeModulestatus(e) {
    this.setState({
      status: e.target.value,
    });
  }
  onChangeExamDay(e) {
    this.setState({
      dueDate: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const assign = {
      name: this.state.name,
      status: this.state.status,
      dueDate: this.state.dueDate,
    };

    axios
      .post("https://backendcommando.herokuapp.com/api/assignments/add", assign)
      .then((res) => console.log(res.data));

    this.props.history.push("/viewAssignments");

    this.setState({
      name: "",
      status: "",
      dueDate: "",
    });
  }
  render() {
    return (
      <div style={{ flexDirection: "column", marginTop: 50 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}>Add New Assignment</h1>
        </div>
        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Assignment name"
            placeholder="name"
            required
            value={this.state.name}
            onChange={this.onChangeModuleName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Assignment status"
            placeholder="Status"
            required
            value={this.state.status}
            onChange={this.onChangeModulestatus}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="Date"
            label=""
            name="Date"
            placeholder="Due Date"
            required
            value={this.state.dueDate}
            onChange={this.onChangeExamDay}
          />
          <Button type="submit" color="blue">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
