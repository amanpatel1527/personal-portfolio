import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Resume.pdf';
const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
        <button className="button s-button">Download Cv</button>
        </a>
        <div className="blur s-blur1" style={{
            background:'#ABF1FF94'}}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div style={{
          left:'14rem'
        }}>
        <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        {/* Second Card */}
        <div style={{
          left:'-4rem',
          top: '12rem'
        }}>
         <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, ReactJs        NodeJs,Sql"}
          />
        </div>
        {/* Third Card */}
        <div style={{
          left:'12rem',
          top: '19rem'
        }}>
         <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "lorem Ipsum is simply dummy text of the printing and typesetting industry that has never existed"
              }
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
