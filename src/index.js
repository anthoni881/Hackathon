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
        <React.Fragment>
          <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/setting" component={Page} />
          </BrowserRouter>
        </React.Fragment>
      </ApplicationProvider>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
