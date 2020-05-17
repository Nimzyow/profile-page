import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
//import "./App.css";
//import "./app.scss";

import LandingPage from "./components/pages/landingPage/LandingPage";

function App() {
  useEffect(() => {
    //initialises Materialise JS
    M.AutoInit();
  }, []);

  return (
    <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
      <LandingPage />
      <div
        style={{
          position: "absolute",
          top: "800px",
          height: "500px",
          width: "100%",
          backgroundColor: "purple",
        }}
      ></div>
    </div>
  );
}

export default App;
