import React, { Fragment } from "react";
import underwaterImage from "../../assets/isometricunderwater.png";
import reactImage from "../../assets/reactBanner.png";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={underwaterImage} className="imageWidth" useMap="#Map" />
      <map name="Map" id="Map">
        <area
          shape="poly"
          href="#javascript"
          coords="10, 277, 10, 312, 163, 387, 163, 351"
          onClick={() => {
            console.log("Javascript poly");
          }}
        />
        <area
          shape="poly"
          href="#javascript"
          coords="178, 352, 178, 387, 330, 312, 330, 277"
          onClick={() => {
            console.log("Javascript poly");
          }}
        />
        <area
          shape="poly"
          href="#react"
          coords="10, 315, 10, 351, 163, 426, 163, 392"
          onClick={() => {
            console.log("React poly");
          }}
        />
        <area
          shape="poly"
          href="#react"
          coords="178, 394, 178, 426, 330, 352, 330, 315"
          onClick={() => {
            console.log("React poly");
          }}
        />
        <area
          shape="poly"
          href="#typescript"
          coords="10, 355, 10, 390, 163, 464, 163, 429"
          onClick={() => {
            console.log("React poly");
          }}
        />
        <area
          shape="poly"
          href="#typescript"
          coords="178, 431, 178, 464, 330, 390, 330, 355"
          onClick={() => {
            console.log("React poly");
          }}
        />
      </map>
    </div>
  );
};

export default LandingPage;
