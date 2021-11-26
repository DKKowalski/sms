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
import { Nav, Navbar, Container } from "react-bootstrap";

function HeaderTab() {
  return (
    <div className="header">
      <Navbar bg="variant" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="link">
              <School />
              Craddle Creed
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/about" className="link">
                  <Info />
                  About us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/faculty" className="link">
                  <AccountBalanceOutlined />
                  Faculty
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/news" className="link">
                  <ReceiptRounded />
                  NewsLetter
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/contact" className="link">
                  <ContactMailRounded />
                  Contact Us
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/login" className="link">
                  <LockOpenRounded />
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderTab;
