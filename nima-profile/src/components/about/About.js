import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./About.css";

export const About = () => {
  const [key, setKey] = useState("home");

  const START =
    "For a number of years, I've had programming as a hobby. I would dabble in Unity and use C# to code\n\n" +
    "It really fascinated to see the code I wrote being brought to life before me\n\n" +
    "I was creating a scuba diving app while travelling in Japan when I came across an American Software Developer\n\n" +
    "I talked to him for many hours about software development and he encouraged me to take JavaScript courses and to then take courses in React and React Native";

  const MIDDLE =
    "I signed up to many courses on udemy the next day and learned about the principles of programming from the ground up." +
    "I soaked up the information from these courses like a sponge. I spoke to software developers to ask what it's like to be a software developer." +
    "Some of my friends are software developers and I spoke to them extensively about their work, which always left me feeling intrigued." +
    "From all the information I accumulated, I proceeded to build my first full stack MERN application, which my family's company is using today, to handle client database management." +
    " I decided from then that I wanted to become a software developer.";
  const MAKERS =
    "Though I was learning at a rapid pace, I was still concerned about having many knowledge gaps and not implementing best practices." +
    "On the advice of my software developing friends, I decided to join Makers. At Makers I would learn how to TDD and become a better developer through pair programming everyday." +
    "Though we worked mostly with Ruby, I would say the concepts I learnt from Makers, working with other people and best practices through TDD were immensely valuable";
  const NOW =
    "I'm now looking for opportunties to work in a great environment. I'm A highly driven JavaScript developer with a passion for Node, Express and React." +
    "My ability to learn and absorb information has led met to pursue the latest technologies while maintaining clean and understandable code.";
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="beginning" title="Beginning">
        <p style={{ marginTop: "5%" }}>{START}</p>
      </Tab>
      <Tab eventKey="learning" title="Learning">
        <p style={{ marginTop: "5%" }}>{MIDDLE}</p>
      </Tab>
      <Tab eventKey="makers" title="Makers">
        <p style={{ marginTop: "5%" }}>{MAKERS}</p>
      </Tab>
      <Tab eventKey="now" title="Now">
        <p style={{ marginTop: "5%" }}>{NOW}</p>
      </Tab>
    </Tabs>
  );
};
