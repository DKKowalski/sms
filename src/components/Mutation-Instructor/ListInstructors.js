import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default class ListInstructors extends Component {
  constructor(props) {
    super(props);
    this.state = { instructors: [] };
  }

  componentDidMount() {
    axios
      .get("https://backendcommando.herokuapp.com/api/instructor/all")
      .then((response) => {
        this.setState({ instructors: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("https://backendcommando.herokuapp.com/api/instructor/all")
      .then((response) => {
        this.setState({ instructors: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  instructorList() {
    return this.state.instructors.map(function (currentInstructor) {
      return (
        <div
          className="card text-white bg-dark mb-3"
          key={currentInstructor.id}
        >
          <div className="card-body">
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{currentInstructor.name}</h3>
              <p>
                <h6 class="card-subtitle mb-2 text-muted">
                  {currentInstructor.title}
                </h6>
              </p>
            </div>
          </div>

          <div className="card-footer">
            <Link
              to={"/update/" + currentInstructor._id}
              className=" btn btn-warning"
              style={{
                fontSize: "15px",
                width: "100px",
              }}
            >
              <span> edit</span>
            </Link>
            <Link
              to={"/delete/" + currentInstructor._id}
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
      <div style={{ marginTop: 32 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> Instructors </h1>
        </div>

        <Table stripe bordered hover>
          <tbody> {this.instructorList()} </tbody>
        </Table>
      </div>
    );
  }
}
