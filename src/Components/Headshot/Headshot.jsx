// import React from "react";
import "./Headshot.css";
import Nina_Headshot from "../../Assets/Nina_Headshot2.png";

export const Headshot = () => {
  return (
    <div id="home" className="headshot">
      <h1>Nina Paprocki</h1>
      <div className="headshot-sections">
        <img className="headshot-img" src={Nina_Headshot} alt=""></img>
        <div className="headshot-right">
          <p>
            I am a UI/UX Developer studying at Northeastern University,
            specializing in Human Centered Computing. My mission is to
            revolutionize product development by integrating minimalistic and
            outstanding design. I am dedicated to enhancing accessibility,
            transparency, and usability in every project I undertake.
          </p>{" "}
        </div>
      </div>
      <div className="headshot-action">
        <div className="headshot-contact">Contact Me</div>
        <div className="headshot-resume">My Resume</div>
      </div>
    </div>
  );
};

// export const Headshot = () => {
//   return (
//     <div id="home" className="headshot">
//       <h1 style={{ marginTop: "40px" }}>Nina Paprocki</h1>
//       <img className="headshot-img" src={Nina_Headshot} alt=""></img>
//       <h1>
//         <span className="headshot-h1-span1">UI</span>/
//         <span className="headshot-h1-span1">UX</span>
//       </h1>
//       <p>
//         I am a UI/UX Developer studying at Northeastern University, specializing
//         in Human Centered Computing. My mission is to revolutionize product
//         development by integrating minimalistic and outstanding design. I am
//         dedicated to enhancing accessibility, transparency, and usability in
//         every project I undertake.
//       </p>
//       <div className="headshot-action">
//         <div className="headshot-contact">Contact Me</div>
//         <div className="headshot-resume">My Resume</div>
//       </div>
//     </div>
//   );
// };
