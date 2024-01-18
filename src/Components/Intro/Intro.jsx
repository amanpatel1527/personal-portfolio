import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy ! I Am</span>
          <span>Aman Patel</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/amanpatel1527" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/amanpatel01/" target="_blank">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/_.aman.patel__/" target="_blank">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Expert" txt2="Developer" />
        </div>
        {/* Blur Divs */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
