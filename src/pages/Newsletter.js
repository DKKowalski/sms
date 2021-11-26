import React from "react";
import "./Newsletter.css";
import ad from "../assets/ad.jpeg";

function Newsletter() {
  return (
    <div
      style={{
        marginBottom: 450,
        justifyContent: "center",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      <div className="text">
        <h1 style={{ color: "black", fontSize: 50 }}>
          <i class="bullhorn icon"></i>
          Admissions Ongoing !!!
        </h1>
      </div>

      <div className="image">
        <img src={ad} alt="admission img" />
      </div>
    </div>
  );
}

export default Newsletter;
