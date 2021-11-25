import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
export default class UploadAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };

    this.onChangeName = this.onChangeName.bind(this);

    this.state = {
      selectedFile: null,
    };

    this.state = {
      name: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
  };

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://backendcommando.herokuapp.com/api/assignment", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        alert("upload success");
      })
      .catch((err) => {
        // then print response status
        alert("upload fail");
      });
  };

  componentDidMount() {
    axios
      .get(
        "http://backendcommando.herokuapp.com/api/assignments/all" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          marginTop: 50,
        }}
      >
        <div className="headtext">
          <h1 style={{ color: "black" }}>Upload Assignment</h1>
          <p>Please choose file and Click submit</p>
        </div>

        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="file"
            onChange={this.onChangeHandler}
          />
        </Form>

        <Button type="submit" color="blue" onClick={this.onClickHandler}>
          Submit
        </Button>
      </div>
    );
  }
}
