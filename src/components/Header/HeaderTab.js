import "./HeaderTab.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  School,
  Info,
  AccountBalanceOutlined,
  ReceiptRounded,
  ContactMailRounded,
  LockOpenRounded,
} from "@material-ui/icons";



function HeaderTab() {
  return (
    <div  className="header">
      <div className="container">
        <div className="left__items">
          <Link to="/home" className="link">
            <School />
            Craddle Creed
          </Link>
        </div>
        <div className="middle__items">
          <Link to="/about" className="link">
            <Info />
            About us
          </Link>

          <Link to="/faculty" className="link">
            <AccountBalanceOutlined />
            Faculty
          </Link>

          <Link to="/news" className="link">
            <ReceiptRounded />
            NewsLetter
          </Link>

          <Link to="/contact" className="link">
            <ContactMailRounded />
            Contact Us
          </Link>
        </div>
        <div className="right__items">
          <span>
            <Link to="/login" className="link">
              <LockOpenRounded />
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderTab;
