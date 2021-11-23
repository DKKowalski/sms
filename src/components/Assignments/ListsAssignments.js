import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Assignment = (props) => {
  return (
    <div>
      <Table stripe bordered hover>
        <thead>
          <tr>
            <th>NAME</th>
            <th>STATUS</th>
            <th>DUE</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.assignments.name}</td>
            <td>{props.assignments.status}</td>
            <td> {props.assignments.dueDate}</td>

            <td>
              <Button color="orange">
                <Link to={"/assignmentupload/" + props.assignments._id}>
                  Upload
                </Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default class ListsAssignments extends Component {
  constructor(props) {
    super(props);
    this.state = { assignments: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/assignments/all")
      .then((response) => {
        this.setState({ assignments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/assignments/all")
      .then((response) => {
        this.setState({ assignments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  assignmentList() {
    return this.state.assignments.map(function (currentAssignment, i) {
      return <Assignment assignments={currentAssignment} key={i} />;
    });
  }
  render() {
    return (
      <div style={{ marginTop: 32 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> Assignments </h1>
        </div>

        <Table stripe bordered hover>
          <tbody> {this.assignmentList()} </tbody>
        </Table>
      </div>
    );
  }
}
