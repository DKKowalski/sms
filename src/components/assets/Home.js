import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

import "./Home.css";
import HeaderTab from "./HeaderTab";
import bg_4 from "../images/bg_4.jpg";
import bg_1 from "../images/bg_1.jpg";
import bg_2 from "../images/bg_2.jpg";
import Footer from "../assets/Footer";

function Home() {
  return (
    <div className="home">
      <HeaderTab style={{position:"fixed"}}/>
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div data-src={bg_4} />
        <div data-src={bg_1} />
        <div data-src={bg_2} />
      </AwesomeSlider>

      <div className="home__wrapper">
        <div>
          <h1>Better Future For Your Kids</h1>
          <p>Let the child be the director, and the actor in his own play</p>
        </div>
      </div>
      <div className="Info__wrapper">
        <div className="tutorInfo">
          <h3>Certified Teachers</h3>
          <p>
            Our teachers are professionals and certified in their own subjects.
            Children enjoy the classes and share their doubts with their
            teacher.
          </p>
        </div>
        <div className="eduInfo">
          <h3>Special Education</h3>
          <p>
            Education is not just limited to books, so we also aware children
            about outside world activities.
          </p>
        </div>
        <div className="sportsInfo">
          <h3>Sports</h3>
          <p>
            Sports are equaly important as education, We keep your children
            active through our sports activities.
          </p>
        </div>
        <div className="monitorInfo">
          <h3>Smart Monitoring</h3>
          <p>
            We keep track of student performance through our smart web
            application. Application also helps guardians to track their
            children performance.
          </p>
        </div>

        <div className="guardianRatingInfo">
          <h3>What Guuardians say about us</h3>
          <p>
            'My child is very happy, the teaching staff are very good at
            nurturing and developing the children's academic skills as well as
            social interaction and productive play.' 'My child has had some ups
            and downs in year, but his teacher and the school have helped.' 'I
            am really happy with the progress my child is making at this school,
            all of his teachers have been lovely and always there to help.'
            'Very good school, you have helped my child so much with her
            speech.' 'I am happy that my child is happy in school.' 'All staff
            at this school are really helpful and I feel that my child is
            receiving everything he needs at this school and his teachers have
            been great at keeping us updated with his school life.' 'My child
            likes this school. All teachers are polite and friendly.' 'I
            couldn't think of a better school for my children to be in.' 'My
            child has improved so much since starting in Reception. She has
            loads of confidence and is always happy to come to school.' 'My
            child is very happy at this school and they love how they do not get
            bullied.'
          </p>
        </div>
      </div>
      <div className="whatWeOffer__Wrapper">
        <div className="item1"></div>
        <div className="item2"></div>
        <div className="item3"></div>
        <div className="item4"></div>
        <div className="item5"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
