import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import DeleteInstructor from "./DeleteInstructor";
import AddInstructor from "./AddInstructor";
import UpdateInstructor from "./UpdateInstructor";
import ListInstructors from "./ListInstructors";

export default class Instructor extends Component {
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
                  to="/admin/dashboard/instructor_mgt/view_instructors"
                >
                  View Instructors
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/instructor_mgt/add_instructor"
                >
                  Add Instructors
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <Route
          path="/admin/dashboard/instructor_mgt/add_instructor"
          component={AddInstructor}
        />
        <Route
          path="/admin/dashboard/delete_student/:id"
          component={DeleteInstructor}
        />
        <Route
          path="/admin/dashboard/instructor_mgt/view_instructors"
          component={ListInstructors}
        />

        <Route path="/update/:id" component={UpdateInstructor} />
      </Router>
    );
  }
}
