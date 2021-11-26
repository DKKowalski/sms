import React, { Component } from "react";
import { Form, Input, Button, Dropdown } from "semantic-ui-react";
import axios from "axios";
export default class AddCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeInstructor = this.onChangeInstructor.bind(this);
    this.onChangeInstructorEmail = this.onChangeInstructorEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      instructors: [],
      instructorsList: [],
      errors: {},
      instructoremail: [],
      mobile: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://backendcommando.herokuapp.com/api/instructor/all")
      .then((response) => {
        this.setState({ instructorsList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Setting State
  onChangeCourseName(e) {
    this.setState({
      courseName: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value,
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  onChangeInstructor(e) {
    this.setState({
      instructors: e.target.value,
    });
  }
  onChangeInstructorEmail(e) {
    this.setState({
      instructoremail: e.target.value,
    });
  }
  handleMobileChange = (e) => {
    let value = e.target.value;
    if (value !== "") {
      this.setState({ mobile: e.target.value });
    } else {
      this.setState({ mobile: "" });
    }
  };

  onSubmit(e) {
    e.preventDefault();

    const {
      courseName,
      description,
      startDate,
      duration,
      instructors,
      instructoremail,
    } = this.state;

    //Check for errors
    if (courseName === "") {
      this.setState({ errors: { courseName: "Course Name is required" } });
      return;
    }
    if (description === "") {
      this.setState({ errors: { description: "Description is required" } });
      return;
    }
    if (startDate === "") {
      this.setState({ errors: { startDate: "Starting Date is required" } });
      return;
    }
    if (duration === "") {
      this.setState({ errors: { duration: "Duration is required" } });
      return;
    }
    if (instructors === "") {
      this.setState({ errors: { instructors: "Instrutor is required" } });
      return;
    }
    if (instructoremail === "") {
      this.setState({
        errors: { instructoremail: "Instrutor Email is required" },
      });
      return;
    }

    console.log(`Form Submitted`);
    console.log(`Course Name : ${this.state.courseName}`);
    console.log(`Description : ${this.state.description}`);
    console.log(`Start Date : ${this.state.startDate}`);
    console.log(`Duration : ${this.state.duration}`);
    console.log(`Instructor : ${this.state.instructors}`);
    console.log(`Instructor Email: ${this.state.instructoremail}`);
    console.log(`Instructor Number: ${this.state.mobile}`);

    const newUser = {
      courseName: this.state.courseName,
      description: this.state.description,
      startDate: this.state.startDate,
      duration: this.state.duration,
      instructorName: this.state.instructors,
      instructorEmail: this.state.instructoremail,
    };

    axios.post("http://localhost:4000/api/course/add", newUser).then((res) => {
      console.log(res.data);
      this.props.history.push(`/viewcourse`);
    });

    let mob = this.state.mobile;
    axios.post("http://localhost:4000/api/course/sendsms", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: mob,
      }),
    });
    // .then(response => {
    //   console.log("SMS : " + response);
    //   return response.json();
    // })
    // .then(json => {
    //   console.log("SMS has been sended to : " + json.to + " Successfuly");
    // });

    // //Clear state after error checking(When click submit button)
    this.setState({
      courseName: "",
      description: "",
      startDate: "",
      duration: "",
      instructors: "",
      instructoremail: "",
    });
  }
  render() {
    return (
      <div style={{ flexDirection: "column" }} className="container">
        <div className="headtext">
          <h1 style={{ color: "black" }}>Add Course</h1>
          <p>Please Enter Course Information and Click submit</p>
        </div>
        <Form onSubmit={this.onSubmit} className="formContainer">
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="course name"
            placeholder="Course Name"
            required
            value={this.state.courseName}
            onChange={this.onChangeCourseName}
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="description"
            placeholder="Course Description"
            required
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="date"
            label=""
            name="starting date"
            placeholder="Starting Date"
            required
            value={this.state.startDate}
            onChange={this.onChangeStartDate}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="text"
            label=""
            name="instructor"
            placeholder="Instructor"
            required
            onChange={this.onChangeInstructor}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="email"
            label=""
            name="instructor Email"
            placeholder="Instructor Email"
            required
            onChange={this.onChangeInstructorEmail}
          />
          <Form.Field
            id="form-input-control-email"
            control={Input}
            type="date"
            label=""
            name="Duration"
            placeholder="Duration"
            required
            onChange={this.onChangeDuration}
          />

          <Button type="submit" color="blue">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
