import Card from "../components/Card/Cards";
import React, { Component } from "react";
import jhs from "../assets/jhs.jpg";
import kindergarten from "../assets/kindergarten.jpg";
import primary from "../assets/primary.jpg";
import nursery from "../assets/nursery.jpg";
import creche from "../assets/creche.jpg";

export default class Faculty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "Nursery",
          body: "  Our teachers are professionals and certified in their own subjects.Children enjoy the classes and share their doubts with their teacher.",
          id: 1,
          image: nursery,
        },
        {
          title: " Kindergarten",
          body: " Education is not just limited to books, so we also aware children about outside world activities.",
          id: 2,
          image: kindergarten,
        },
        {
          title: "Primary",
          body: " Sports are equaly important as education, We keep your children active through our sports activities.",
          id: 3,
          image: primary,
        },
        {
          title: " Junior High School",
          body: "We keep track of student performance through our smart web application. Application also helps guardians to track their children performance.",
          id: 4,
          image: jhs,
        },
        {
          title: " Creche",
          body: "My child is very happy, the teaching staff are very good at nurturing and developing the children's academic skills as well as social interaction and productive play.",
          id: 4,
          image: creche,
        },
      ],
    };
  }
  render() {
    return (
      <div  style={{
        marginBottom: 150,
        justifyContent: "center",
        flexDirection: "column",
      }}>
        <div className="text">
          <h1 style={{ color: "black", fontSize: 50 }}>Faculties</h1>
          <div className="info__wrapper">
            <div className="Card">
              {this.state.sections.map(({ title, image, body, id }) => (
                <Card key={id} image={image} title={title} body={body} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
