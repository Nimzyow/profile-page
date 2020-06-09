import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./About.css";

export const About = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <p style={{ marginTop: "5%" }}>meow meow meow meow</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p style={{ marginTop: "5%" }}>woof woof woof</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p style={{ marginTop: "5%" }}>moo moo moo</p>
      </Tab>
    </Tabs>
  );
};
