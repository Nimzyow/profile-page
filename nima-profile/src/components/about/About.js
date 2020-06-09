import React from "react";
import img from "../../assets/hex.png";

export const About = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <h6>1</h6>
        <h6>2</h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <h6>3</h6>
        <h6>4</h6>
      </div>
    </div>
  );
};
