import React from "react";
import "./Login.css";
import student from "../assets/students-cap.png";
import admin from "../assets/admin.png";
import instructor from "../assets/instructor.png";
import {Link} from "react-router-dom"
function Login() {
  return (
    <div className="login">
      <Link to="/student/login" className="student">
        <img style={{ width: 100, height: 100 }} src={student} />
        <h1 style={{ color: "black" }}>Student</h1>
      </Link>
      <Link to="/instructor/login" className="instructor">
        <img style={{ width: 100, height: 100 }} src={instructor} />
        <h1 style={{ color: "black" }}>Instructor</h1>
      </Link>
      <Link to="/admin/login"className="admin">
        <img
          style={{ margin: "auto", width: 100, height: 100 }}
          src={admin}
        />
        <h1 style={{ color: "black" }}>Admin</h1>
      </Link>
    </div>
  );
}

export default Login;
