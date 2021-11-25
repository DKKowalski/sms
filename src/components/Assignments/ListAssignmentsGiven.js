import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class ListAssignmentsGiven extends Component {
  constructor(props) {
    super(props);
    this.state = { assignments: [] };
  }

  componentDidMount() {
    axios
      .get("https://backendcommando.herokuapp.com/api/assignments/all")
      .then((response) => {
        this.setState({ assignments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("https://backendcommando.herokuapp.com/api/assignments/all")
      .then((response) => {
        this.setState({ assignments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  instructorAssignmentList() {
    return this.state.assignments.map(function (currentInstructor) {
      return (
        <div className="card bg-light mb-3" key={currentInstructor.id}>
          <div className="card-body">
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{currentInstructor.name}</h3>
            </div>
          </div>

          <div className="card-footer">
            <Link
              to={"/assignment/edit/" + currentInstructor._id}
              className=" btn btn-warning"
              style={{ fontSize: "15px", width: "100px" }}
            >
              <span> edit</span>
            </Link>
            <Link
              to={"assignment/delete/" + currentInstructor._id}
              className="btn btn-danger"
              style={{
                fontSize: "15px",
                width: "100px",
              }}
            >
              <span> delete</span>
            </Link>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {" "}
        <div style={{ marginTop: 32 }}>
          <div className="headtext">
            <h1 style={{ color: "black" }}> Admins </h1>
          </div>

          <Table stripe bordered hover>
            <tbody> {this.instructorAssignmentList()} </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
