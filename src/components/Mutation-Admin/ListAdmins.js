import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Admin = (props) => {
  return (
    <div>
      <Table stripe bordered hover>
        <thead>
          <tr>
            <th>NAME</th>
            <th>ID NUMBER</th>
            <th>EMAIL</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.admin.adminID}</td>
            <td>{props.admin.name}</td>
            <td>{props.admin.email}</td>
            <td>{props.admin.password}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default class ListAdmins extends Component {
  constructor(props) {
    super(props);
    this.state = { admins: [] };
  }

  componentDidMount() {
    axios
      .get("https://backendcommando.herokuapp.com/api/admin/edit")
      .then((response) => {
        this.setState({ admins: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("https://backendcommando.herokuapp.com/api/admin/edit")
      .then((response) => {
        this.setState({ admins: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  adminList() {
    return this.state.admins.map(function (currentAdmin, i) {
      return <Admin admin={currentAdmin} key={i} />;
    });
  }

  render() {
    return (
      <div style={{ marginTop: 32 }}>
        <div className="headtext">
          <h1 style={{ color: "black" }}> Admins </h1>
        </div>

        <Table stripe bordered hover>
          <tbody> {this.adminList()} </tbody>
        </Table>
      </div>
    );
  }
}
