import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

function Slider({ img1, img2, img3 }) {
  return (
    <div>
      <AwesomeSlider
        style={{
          height: 650,
          maxWidth: 1850,
          margin: "auto",
          marginBottom: 64,
        }}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AwesomeSlider>
    </div>
  );
}

export default Slider;
