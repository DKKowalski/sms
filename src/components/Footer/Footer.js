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
      <div className="textArea" style={{ display: "flex" }}>
        <div style={{ marginRight: 20 }}>
          <img
            src={crest}
            alt="crest"
            style={{
              width: 200,
              height: 200,
            }}
          />
        </div>
        <div className="text">
          <h1>Craddle Creed School</h1>
          <p> Faith, Character and Intergrity</p>
          <p>P.O.BOX KW 72</p>
          <p>KWABENYA-ACCRA</p>
        </div>
      </div>

      <div className="socialMedia">
        <WhatsApp style={{ color: "white", fontWeight: "Bold" }} />
        <Facebook style={{ color: "white", fontWeight: "Bold" }} />
        <Instagram style={{ color: "white", fontWeight: "Bold" }} />
      </div>
      <div className="copyRight">
        <CopyrightRounded style={{ color: "white" }} />
        <p>2021 craddle creed school</p>
      </div>
    </div>
  );
}

export default footer;
