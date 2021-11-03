import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTab from "../src/components/Header/HeaderTab";
import Footer from "../src/components/Footer/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import ContactUs from "./pages/ContactUs";

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
              <Route path="/login"></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
