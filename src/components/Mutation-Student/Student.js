import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import AddStudent from "./AddStudent";

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
                <Link className="link" to="admin/student_mgt/view_students">
                  View Students
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link className="link" to="/admin/dashboard/add_student">
                  Add Student
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <Route path="/admin/dashboard/add_student" component={AddStudent} />
      </Router>
    );
  }
}
