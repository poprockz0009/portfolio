// import React from "react";
import "./Navbar.css";
import Teal_Logo from "../../Assets/Teal_Logo.png";
// import { useCallback } from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar" style={{ alignItems: "center" }}>
      <img
        src={Teal_Logo}
        style={{
          width: "75px",
          height: "75px",
          paddingLeft: "70px",
        }}
        alt=""
      />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Work</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-contact">Contact Me</div>
    </div>
  );
};
