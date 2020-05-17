import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    //initialises Materialise JS
    M.AutoInit();
  }, []);

  return <div>Hello world!</div>;
}

export default App;
