import React from "react";
import Slider from "../components/Slider/Slider";
import img1 from "../assets/contactUs.jpg";
import img2 from "../assets/contactUs2.jpg";
import img3 from "../assets/contactUs3.jpg";

function ContactUs() {
  return (
    <div>
      <Slider img1={img1} img2={img2} img3={img3} />
      <h1>Hello</h1>
    </div>
  );
}

export default ContactUs;
