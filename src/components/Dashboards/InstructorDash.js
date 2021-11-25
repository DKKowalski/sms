import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import AddAssignment from "../Assignments/AddAssignment";
import ListAssignmentsGiven from "../Assignments/ListAssignmentsGiven";
import EditAssignments from "../Assignments/EditAssignments";
import ListCourses from "../Courses/ListCourses";
class InstructorDash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="container"
        style={{ flexDirection: "column", marginBottom: 450 }}
      >
        <Router>
          <div className="headtext">
            <h1 style={{ color: "black" }}>Welcome !</h1>
          </div>
          <Card style={{ backgroundColor: "#000C66", width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link className="link" to="">
                  Take Attendance
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/instructor/add_assignment">
                  Add Assignments
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/instructor/view_courses">
                  View Courses
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/instructor/view_assignments">
                  View Assignments
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/instructor/view_students_grade">
                  View Students Grade
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Route
            path="/instructor/view_assignments"
            component={ListAssignmentsGiven}
          />
          <Route path="/instructor/add_assignment" component={AddAssignment} />
          <Route path="/assignment/edit/:id" component={EditAssignments} />
          <Route path="/instructor/view_courses" component={ListCourses} />
        </Router>
      </div>
    );
  }
}

export default InstructorDash;
