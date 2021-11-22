import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import "./StudentDash.css";
class StudentDash extends Component {
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
                  Assignments
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Courses
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Grades
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Router>
      </div>
    );
  }
}

export default StudentDash;
