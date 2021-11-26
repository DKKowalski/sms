import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Table } from "react-bootstrap";
const Course = (props) => {
  return (
    <div>
      <Table stripe bordered hover>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>INSTRUCTOR</th>
            <th>INSTRUCTOR EMAIL</th>
            <th>DURATION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {props.course.courseName} </td>
            <td> {props.course.description} </td>
            <td> {props.course.instructorName} </td>
            <td> {props.course.instructorEmail} </td>
            <td> {props.course.startDate} </td>
            <td> {props.course.duration} </td>

            <td>
              <Button color="yellow">
                <Link to={"/update/" + props.course._id}>Edit</Link>
              </Button>
              <Button color="orange">
                <Link to={"/delete/" + props.course._id}>Delete</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default class ManageCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("https://backendcommando.herokuapp.com/api/course/")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("https://backendcommando.herokuapp.com/api/course/")
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
          <h1 style={{ color: "black" }}> Manage Courses </h1>
        </div>

        <Table stripe bordered hover>
          <tbody> {this.courseList()} </tbody>
        </Table>
      </div>
    );
  }
}
