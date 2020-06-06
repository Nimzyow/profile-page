import React from "react";
import "./Bar.scss";

export const Bar = () => {
  return (
    <div className="skills" style={{ zIndex: "0" }}>
      <div className="charts">
        <div className="chart chart--dev">
          <span className="chart__title">Development</span>
          <ul className="chart--horiz">
            <li className="chart__bar" style={{ width: "98%" }}>
              <span className="chart__label">HTML5</span>
            </li>
            <li className="chart__bar" style={{ width: "98%" }}>
              <span className="chart__label">CSS3 & SCSS</span>
            </li>
            <li className="chart__bar" style={{ width: "70%" }}>
              <span className="chart__label">JavaScript</span>
            </li>
            <li className="chart__bar" style={{ width: "40%" }}>
              <span className="chart__label">AngularJS</span>
            </li>
            <li className="chart__bar" style={{ width: "40%" }}>
              <span className="chart__label">ReactJS</span>
            </li>
            <li className="chart__bar" style={{ width: "60%" }}>
              <span className="chart__label">jQuery</span>
            </li>
            <li className="chart__bar" style={{ width: "55%" }}>
              <span className="chart__label">NodeJS</span>
            </li>
            <li className="chart__bar" style={{ width: "50%" }}>
              <span className="chart__label">Grunt / Gulp / Webpack</span>
            </li>
            <li className="chart__bar" style={{ width: "40%" }}>
              <span className="chart__label">.NET</span>
            </li>
            <li className="chart__bar" style={{ width: "60%" }}>
              <span className="chart__label">Umbraco</span>
            </li>
            <li className="chart__bar" style={{ width: "60%" }}>
              <span className="chart__label">Sitecore</span>
            </li>
          </ul>
        </div>

        <div className="chart chart--prod">
          <span className="chart__title">Productivity</span>
          <ul className="chart--horiz">
            <li className="chart__bar" style={{ width: "75%" }}>
              <span className="chart__label">
                Git + Github, Bitbucket & Sourcetree
              </span>
            </li>
            <li className="chart__bar" style={{ width: "80%" }}>
              <span className="chart__label">Microsoft Office</span>
            </li>
          </ul>
        </div>

        <div className="chart chart--design">
          <span className="chart__title">Design</span>
          <ul className="chart--horiz">
            <li className="chart__bar" style={{ width: "45%" }}>
              <span className="chart__label">Photoshop</span>
            </li>
            <li className="chart__bar" style={{ width: "35%" }}>
              <span className="chart__label">Illustrator</span>
            </li>
            <li className="chart__bar" style={{ width: "60%" }}>
              <span className="chart__label">User Experience</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
