import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ListGroup, Card } from "react-bootstrap";
import DeleteAdmin from "./DeleteAdmin";
import ListAdmins from "./ListAdmins";
import AddAdmin from "./AddAdmin";

export default class Admin extends Component {
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
                  to="/admin/dashboard/admin_mgt/view_admins"
                >
                  View Admins
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/admin_mgt/add_admin"
                >
                  Add New Admin
                </Link>
              </ListGroup.Item>

              <ListGroup.Item>
                <Link
                  className="link"
                  to="/admin/dashboard/admin_mgt/delete_admin/:id"
                >
                  Delete Admin
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <Route
          path="/admin/dashboard/admin_mgt/add_admin"
          component={AddAdmin}
        />
        <Route
          path="/admin/dashboard/delete_student/:id"
          component={DeleteAdmin}
        />
        <Route
          path="/admin/dashboard/admin_mgt/view_admins"
          component={ListAdmins}
        />

        <Route path="/update/:id" />
      </Router>
    );
  }
}
