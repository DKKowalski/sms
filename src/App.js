import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTab from "../src/components/Header/HeaderTab";
import Footer from "../src/components/Footer/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AdminLogin from "./pages/LoginPages/AdminLogin";
import StudentLogin from "./pages/LoginPages/StudentLogin";
import instructorLogin from "./pages/LoginPages/instructorLogin";
import StudentDashboard from "./components/Dashboards/StudentDash";
import InstructorDashboard from "./components/Dashboards/InstructorDash";
import "semantic-ui-css/semantic.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderTab />
          <div>
            <Switch>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/about" exact component={AboutUS}></Route>
              <Route path="/faculty"></Route>
              <Route path="/news"></Route>
              <Route path="/contact" exact component={ContactUs}></Route>
              <Route path="/login">{Login}</Route>
              <Route path="/admin/login" component={AdminLogin} />
              <Route path="/student/login" component={StudentLogin} />
              <Route path="/instructor/login" component={instructorLogin} />
              <Route path="/student/dashboard" component={StudentDashboard} />
              <Route path="/instructor/dashboard" component={InstructorDashboard} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
