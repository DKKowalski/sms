import React from "react";

import Slider from "../components/Slider/Slider";
import Card from "../components/Card/Cards";

import "./Home.css";
import bg_1 from "../assets/bg_1.jpg";
import bg_2 from "../assets/bg_2.jpg";
import bg_3 from "../assets/bg_3.jpg";

import parents from "../assets/parents.png";
import bookStack from "../assets/book-stack.png";
import monitoring from "../assets/monitoring.png";
import sports from "../assets/sports.png";
import teacher from "../assets/teacher.png";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "Certified Teachers",
          body: "  Our teachers are professionals and certified in their own subjects.Children enjoy the classes and share their doubts with their teacher.",
          id: 1,
          image: teacher,
        },
        {
          title: " Special Education",
          body: " Education is not just limited to books, so we also aware children about outside world activities.",
          id: 2,
          image: bookStack,
        },
        {
          title: "Sports",
          body: " Sports are equaly important as education, We keep your children active through our sports activities.",
          id: 3,
          image: sports,
        },
        {
          title: " Smart Monitoring",
          body: "We keep track of student performance through our smart web application. Application also helps guardians to track their children performance.",
          id: 4,
          image: monitoring,
        },
        {
          title: " What Guardians say about us",
          body: "My child is very happy, the teaching staff are very good at nurturing and developing the children's academic skills as well as social interaction and productive play.",
          id: 4,
          image: parents,
        },
      ],
    };
  }
  render() {
    return (
      <div className="home">
        <Slider img1={bg_1} img2={bg_2} img3={bg_3} />
        <div>
          <h1 style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
            Better Future For Your Kids
          </h1>
          <p style={{ color: "black", fontSize: 22, fontWeight: "small" }}>
            Let the child be the director, and the actor in his own play
          </p>
        </div>
        <div className="info__wrapper">
          <div className="Card">
            {this.state.sections.map(({ title, image, body, id }) => (
              <Card key={id} image={image} title={title} body={body} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
