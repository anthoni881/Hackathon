import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./container/Login";
import { Route, BrowserRouter } from "react-router-dom";
import Page from "./Pages/Page";
import { ApplicationProvider } from "./component/form";
const App = () => {
  return (
    <div className="App">
      <ApplicationProvider>
        <BrowserRouter>
          <Route path="/login" component={Login} />
          <Route exact path="/home" component={Page} />
        </BrowserRouter>
      </ApplicationProvider>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
