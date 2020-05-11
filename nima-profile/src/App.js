import React, { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    //initialises Materialise JS
    M.AutoInit();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
