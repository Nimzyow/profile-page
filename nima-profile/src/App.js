import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landingPage/LandingPage";
import { ReactPage } from "./pages/reactPage/ReactPage";
import { JavaScriptPage } from "./pages/javascriptPage/JavaScriptPage";
import { typescriptPage } from "./pages/typescriptPage/typescriptPage";
import { redux } from "./pages/redux/redux";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/react" component={ReactPage} />
        <Route exact path="/javascript" component={JavaScriptPage} />
        <Route exact path="/typescript" component={typescriptPage} />
        <Route exact path="/redux" component={redux} />
      </Switch>
    </Router>
  );
}

export default App;
