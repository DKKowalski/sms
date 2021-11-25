import React, { Component } from "react";
import axios from "axios";
export default class DeleteAdmin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .delete(
        "http://backendcommando.herokuapp.com/api/admin/delete/" + this.props.match.params.id
      )
      .then((response) => {})
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.delete(
      "http://backendcommando.herokuapp.com/api/admin/delete/" + this.props.match.params.id
    );

    this.props.history.push("/adminview");
  }
  render() {
    return (
      <div>
        <h1> Admin deleted successfully </h1>
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
