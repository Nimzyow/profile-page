import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
//import "./App.css";
//import "./app.scss";

import LandingPage from "./pages/landingPage/LandingPage";
import NavBar from "./components/layout/navbar/NavBar";
import { Bar } from "./components/bar/Bar";
import { Header } from "./components/header/Header";

function App() {
  useEffect(() => {
    //initialises Materialise JS
    M.AutoInit();
  }, []);

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById("navBar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);

  return (
    <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
      <LandingPage />
      <NavBar />
      <div
        style={{
          position: "absolute",
          top: "110%",
          width: "100%",
        }}
      >
        {" "}
        <Header text="Skill set" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "105%",
          height: "700px",
          width: "100%",
        }}
        id="testing"
      >
        <Bar />
      </div>
    </div>
  );
}

export default App;
