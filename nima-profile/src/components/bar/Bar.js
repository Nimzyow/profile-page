import React from "react";
import "./Bar.scss";

export const Bar = () => {
  const skillPercentages = [
    { skill: "JavaScript", percent: "80%" },
    { skill: "React", percent: "85%" },
    { skill: "Node.js", percent: "80%" },
    { skill: "Express.js", percent: "80%" },
    { skill: "Redux", percent: "85%" },
    { skill: "MongoDB", percent: "75%" },
    { skill: "PostgresQL", percent: "70%" },
    { skill: "Jest and Enzyme", percent: "85%" },
    { skill: "Ruby", percent: "72%" },
    { skill: "Ruby on Rails", percent: "70%" },
    { skill: "RSpec", percent: "76%" },
  ];

  const skillPercentageElement = () => {
    return skillPercentages.map((skillPercentage) => {
      const { skill, percent } = skillPercentage;

      return (
        <li key={skill} className="chart__bar" style={{ width: percent }}>
          <span className="chart__label">{skill}</span>
        </li>
      );
    });
  };

  return (
    <div className="skills" style={{ zIndex: "0" }}>
      <div className="charts">
        <div className="chart chart--dev">
          <ul className="chart--horiz">{skillPercentageElement()}</ul>
        </div>
      </div>
    </div>
  );
};
