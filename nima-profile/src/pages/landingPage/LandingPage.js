import React from "react";
import { useHistory } from "react-router-dom";

import underwaterImage from "../../assets/isometricunderwater.png";
import "./LandingPage.scss";

const LandingPage = () => {
  const history = useHistory();

  const goToLink = (link) => history.push(`/${link}`);

  const createArea = (coords, link) => {
    return (
      <area
        shape="poly"
        coords={coords}
        onClick={() => {
          goToLink(link);
        }}
      />
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={underwaterImage} className="imageWidth" useMap="#Map" />
      <map name="Map" id="Map">
        {createArea("10, 277, 10, 312, 163, 387, 163, 351", "javascript")}
        {createArea("178, 352, 178, 387, 330, 312, 330, 277", "javascript")}
        {createArea("10, 315, 10, 351, 163, 426, 163, 392", "react")}
        {createArea("178, 394, 178, 426, 330, 352, 330, 315", "react")}
        {createArea("10, 355, 10, 390, 163, 464, 163, 429", "typescript")}
        {createArea("178, 431, 178, 464, 330, 390, 330, 355", "typescript")}
        {createArea("10, 394, 10, 427, 163, 503, 163, 470", "redux")}
        {createArea("178, 471, 178, 503, 330, 429, 330, 396", "redux")}

        <area
          shape="poly"
          href="#node"
          coords="10, 433, 10, 468, 163, 542, 163, 508"
          onClick={() => {}}
        />
        <area
          shape="poly"
          href="#node"
          coords="178, 507, 178, 542, 330, 468, 330, 433"
          onClick={() => {}}
        />
      </map>
    </div>
  );
};

export default LandingPage;
