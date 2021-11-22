import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";

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
          <div className="head">
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
                <Link className="link" to="">
                  Add Assignments
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  View Courses
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  View Assignments
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  View Students Grade
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Router>
      </div>
    );
  }
}

export default InstructorDash;
