import React, { Component } from "react";
import axios from "axios";

export default class DeleteInstructor extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .delete(
        "http://localhost:4000/api/instructor/delete/" +
          this.props.match.params.id
      )
      .then((response) => {})
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.delete(
      "http://localhost:4000/api/instructor/delete/" +
        this.props.match.params.id
    );

    this.props.history.push("/instructorList");
  }
  render() {
    return (
      <div>
        <h1> Instructor has been deleted </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="submit"
              value="Back to Courses"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
