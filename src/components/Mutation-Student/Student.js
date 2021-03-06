import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";
import ListStudent from "./ListStudent";
import UpdateStudent from "./UpdateStudent";
export default class Student extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="">
          <Card style={{ marginTop: 50, width: "18rem" }}>
            <Card.Header>Student Management</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/student_mgt/view_students"
                >
                  View Students
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/student_mgt/add_student"
                >
                  Add Student
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <Route
          path="/admin/dashboard/student_mgt/add_student"
          component={AddStudent}
        />
        <Route
          path="/admin/dashboard/delete_student"
          component={DeleteStudent}
        />
        <Route
          path="/admin/dashboard/student_mgt/view_students"
          component={ListStudent}
        />

        <Route path="/update/:id" component={UpdateStudent} />
      </Router>
    );
  }
}
