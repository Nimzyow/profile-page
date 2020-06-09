import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: "20%",
      }}
    >
      <div className="aboutSnipRow">
        <div className="aboutSnip">
          <div id="heart" />
          <p>this is soething to type and i am going to type it</p>
        </div>
        <div className="aboutSnip">
          <div id="heart" />
          <p>this is something i had to do and i and as das</p>
        </div>
      </div>
      <div className="aboutSnipRow">
        <div className="aboutSnip">
          <div id="heart" />
          <p>this is soething to type and i am going to type it</p>
        </div>
        <div className="aboutSnip">
          <div id="heart" />
          <p>this is something i had to do and i and as das</p>
        </div>
      </div>
    </div>
  );
};
