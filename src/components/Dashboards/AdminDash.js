import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import { SettingsSharp } from "@material-ui/icons";

class AdminDash extends Component {
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
            <h1 style={{ color: "black" }}>
              Administrator <SettingsSharp />
            </h1>
          </div>
          <Card style={{ backgroundColor: "#000C66", width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link className="link" to="">
                  Admin Settings
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  New Admin
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Admin Management
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Student Management
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Instructors/Staff
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  New Instructors
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Course Management
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Router>
      </div>
    );
  }
}

export default AdminDash;
