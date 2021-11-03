import React from "react";
import Slider from "../components/Slider/Slider";
import bg_aboutUs1 from "../assets/bg_aboutUs.jpg";
import bg_aboutUs2 from "../assets/bg_aboutUs2.jpg";
import aboutUS3 from "../assets/aboutUS3.jpg";

function AboutUS() {
  return (
    <div>
      <Slider img1={bg_aboutUs1} img2={bg_aboutUs2} img3={aboutUS3} />
    </div>
  );
}

export default AboutUS;
