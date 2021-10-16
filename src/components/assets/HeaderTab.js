import "./HeaderTab.css";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
    <Router>
      <div className="header__wrapper">
        <div className="left__items">
          <Link className="link" to="/">
            <School />
            Craddle Creed
          </Link>
        </div>
        <div className="middle__items">
          <span>
            <Link className="link" to="/about">
              <Info />
              About us
            </Link>
          </span>
          <span>
            <Link className="link" to="/faculty">
              <AccountBalanceOutlined />
              Faculty
            </Link>
          </span>
          <span>
            <Link className="link" to="/news">
              <ReceiptRounded />
              NewsLetter
            </Link>
          </span>
          <span>
            <Link className="link" to="/contactUs">
              <ContactMailRounded />
              Contact Us
            </Link>
          </span>
        </div>
        <div className="right__items">
          <span>
            <Link className="link" to="/login">
              <LockOpenRounded />
              Login
            </Link>
          </span>
        </div>
      </div>
    </Router>
  );
}

export default HeaderTab;
