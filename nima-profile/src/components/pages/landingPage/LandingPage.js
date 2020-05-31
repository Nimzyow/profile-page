import React, { Fragment } from "react";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <h1 className="welcome">Welcome to my Developer page</h1>
      <h2 className="subWelcome">
        <a href="#navBar">Click here to learn more</a>
      </h2>
    </div>
  );
};

export default LandingPage;
