import React from "react";
import "./Footer.css";
import {
  WhatsApp,
  Facebook,
  Instagram,
  CopyrightRounded,
} from "@material-ui/icons";
import crest from "../../assets/cradleCreed.svg";

function footer() {
  return (
    <div className="wrapper">
      <div className="textArea">
        <div style={{ display: "flex"}}>
          <img
            src={crest}
            alt="crest"
            style={{
              width: 100,
              height: 100,
            }}
          />
        </div>
        <h1>Craddle Creed School</h1>
        <p> Faith, Character and Intergrity</p>
        <p>P.O.Box</p>
        <p>Oyarifa, Accra</p>
      </div>

      <div className="socialMedia">
        <WhatsApp style={{ color: "white", fontWeight: "Bold" }} />
        <Facebook style={{ color: "white", fontWeight: "Bold" }} />
        <Instagram style={{ color: "white", fontWeight: "Bold" }} />
      </div>
      <div className="copyRight">
        <CopyrightRounded />
        <p>2021 craddle creed school</p>
      </div>
    </div>
  );
}

export default footer;
