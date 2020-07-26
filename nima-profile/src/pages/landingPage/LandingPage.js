import React, { Fragment } from "react";
import underwaterImage from "../../assets/isometricunderwater.png";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="background-container">
      <img src={underwaterImage} style={{ width: "100%" }} />
    </div>
  );
};

export default LandingPage;
