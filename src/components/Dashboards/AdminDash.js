import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import { SettingsSharp } from "@material-ui/icons";
import Students from "../Mutation-Student/Student";
import Instructor from "../Mutation-Instructor/Instructor";
import Admin from "../Mutation-Admin/Admin";

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
                <Link className="link" to="/admin/dashboard/settings">
                  Admin Settings
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/admin/dashboard/admin_mgt">
                  Admin Management
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/admin/dashboard/student_mgt">
                  Student Management
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="/admin/dashboard/instructor_mgt">
                  Instructors/Staff Management
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link className="link" to="">
                  Course Management
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <Route path="/admin/dashboard/student_mgt" component={Students} />
          <Route
            path="/admin/dashboard/instructor_mgt"
            component={Instructor}
          />
          <Route path="/admin/dashboard/admin_mgt" component={Admin} />
        </Router>
      </div>
    );
  }
}

export default AdminDash;
