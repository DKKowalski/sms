import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import AddCourse from "./AddCourse";
import UpdateCourse from "./UpdateCourse";
import ManageCourse from "./ManageCourse";
import DeleteCourse from "./DeleteCourse";
export default class Course extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Card style={{ marginTop: 50, width: "18rem" }}>
            <Card.Header>Course Management</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/course_mgt/add_course"
                >
                  Add Course
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/course_mgt/manage_course"
                >
                  Manage Course
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <Route
          path="/admin/dashboard/course_mgt/add_course"
          component={AddCourse}
        />
        <Route
          path="/admin/dashboard/course_mgt/manage_course"
          component={ManageCourse}
        />
        <Route path="/update/:id" component={UpdateCourse} />

        <Route path="/delete/:id" component={DeleteCourse} />
      </Router>
    );
  }
}
