import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
const Course = (props) => {
  return (
    <div>
      <Table stripe bordered hover>
        <thead>
          <tr>
            <th>NAME</th>
            <th>ID NUMBER</th>
            <th>EMAIL</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {props.course.courseName} </td>
            <td> {props.course.description} </td>
            <td> {props.course.startDate} </td>
            <td> {props.course.duration} </td>
          </tr>
        </tbody>
        <Button color="yellow">
          <Link to={"/addAssignment"}>Add Assignment</Link>
        </Button>
      </Table>
    </div>
  );
};

export default class ListCourses extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("http://backendcommando.herokuapp.com/api/course/")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/course/")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  courseList() {
    return this.state.courses.map(function (currentCourse, i) {
      return <Course course={currentCourse} key={i} />;
    });
  }
  render() {
    return (
      <div style={{ marginTop: 32 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> Admins </h1>
        </div>

        <Table stripe bordered hover>
          <tbody> {this.courseList()} </tbody>
        </Table>
      </div>
    );
  }
}
