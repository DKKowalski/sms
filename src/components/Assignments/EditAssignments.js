import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button } from "semantic-ui-react";

export default class EditAssignments extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeModuleName = this.onChangeModuleName.bind(this);
    this.onChangeModulestatus = this.onChangeModulestatus.bind(this);
    this.onChangeExamDay = this.onChangeExamDay.bind(this);

    this.state = {
      name: "",
      status: "",
      dueDate: "",
      errors: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://backendcommando.herokuapp.com/api/assignments/edit/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
          status: response.data.status,
          dueDate: response.data.dueDate,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    const updateAssignment = {
      name: this.state.name,
      status: this.state.status,
      dueDate: this.state.dueDate,
    };

    axios
      .post(
        "http://backendcommando.herokuapp.com/api/assignments/update/" +
          this.props.match.params.id,
        updateAssignment
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/viewAssignments");
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
            value={this.state.name}
            onChange={this.onChangeModuleName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="Assignment status"
            value={this.state.status}
            onChange={this.onChangeModulestatus}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="Date"
            label=""
            name="Date"
            value={this.state.dueDate}
            onChange={this.onChangeExamDay}
          />
          <Button type="submit" color="blue">
            Update Assignment
          </Button>
        </Form>
      </div>
    );
  }
}
