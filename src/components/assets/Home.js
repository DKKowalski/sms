import React from "react";
import "./Home.css";
import HeaderTab from "./HeaderTab";
import studentboy from "../images/studentboy.jpg";
import Footer from "../assets/Footer"

function Home() {
  return (
    <div className="home">
     <HeaderTab />
      <div className="home__wrapper">
        <div className="text__wrapper">
          <h1>Better Future For Your Kids</h1>
          <p>Let the child be the director, and the actor in his own play</p>
        </div>

        <div className="image">
          <img src={studentboy} />
     </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
