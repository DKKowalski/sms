import "./HeaderTab.css";
import React from "react";

function HeaderTab() {
  return (
    <div className="header__wrapper">
      <div className="left__items">Craddle Creed</div>
      <div className="middle__items">
        <span>About us</span>
        <span>Student</span>
        <span>Instructors</span>
        <span>Admin</span>
      </div>
      <div className="right__items">
        <span>Login</span>
        {/* <Avatar>me</Avatar>*/}
      </div>
    </div>
  );
}

export default HeaderTab;
