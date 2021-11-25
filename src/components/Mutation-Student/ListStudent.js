import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Student = (props) => {
  return (
    <div>
      <Table stripe bordered hover>
        <thead>
          <tr>
            <th>NAME</th>
            <th>ID NUMBER</th>
            <th>EMAIL</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.student.studentName}</td>
            <td>{props.student.studentID}</td>
            <td> {props.student.email}</td>
            <td> {props.student.password} </td>

            <td>
              <Button color="yellow">
                <Link to={"/update/" + props.student._id}>Edit</Link>
              </Button>
              <Button color="orange">
                <Link to={"/update/" + props.student._id}>Delete</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
class ListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }
  componentDidMount() {
    axios
      .get("https://backendcommando.herokuapp.com/api/student/")
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidUpdate() {
    axios
      .get("https://backendcommando.herokuapp.com/api/student/")
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  studentList() {
    return this.state.students.map(function (currentStudent, i) {
      return <Student student={currentStudent} key={i} />;
    });
  }
  render() {
    return (
      <div style={{ marginTop: 32 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> students </h1>
        </div>

        <Table stripe bordered hover>
          <tbody> {this.studentList()} </tbody>
        </Table>
      </div>
    );
  }
}

export default ListStudent;
