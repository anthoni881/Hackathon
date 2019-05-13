import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import SetPage from "./Pages/SettingPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/setting" component={SetPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
