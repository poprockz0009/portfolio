// import React from "react";
import "./About.css";
// import Teal_Logo from "../../assets/Teal_Logo.png";
import Nina_Climbing_About from "../../assets/Nina_Climbing_About.jpg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={Teal_Logo} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="profile-photo" src={Nina_Climbing_About} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am a B.S. Computer Science student at Northeastern University,
              specializing in Human Centered Computing. My mission is to
              revolutionize product development by integrating minimalistic and
              outstanding design. I am dedicated to enhancing accessibility,
              transparency, and usability in every project I undertake.
            </p>
            <p>
              I am a B.S. Computer Science student at Northeastern University,
              specializing in Human Centered Computing.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>HTML/CSS</p>
              <hr style={{ width: "100%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "65%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};
