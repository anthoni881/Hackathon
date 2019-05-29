import React, { useState, useContext } from "react";
import Create from "../component/Create";
import History from "../component/History";
import Logoutbtn from "../component/Logoutbtn";
import "./Navbar.css";
import { Redirect } from "react-router-dom";
import { ApplicationContext } from "../component/form";

const Navbar = () => {
  const [activeContent, setActiveContent] = useState("Create");
  const app = useContext(ApplicationContext);

  const ButtonNavbar = props => {
    if (props.name === "Create") {
      return <Create />;
    } else if (props.name === "History") {
      return <History />;
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    app.setIsLoggedIn(false);
  };
  return app.isLoggedIn ? (
    <div className="cont">
      <div className="menu">
        <button className="buttons" onClick={() => setActiveContent("Create")}>
          Create
        </button>
        <button className="buttons" onClick={() => setActiveContent("History")}>
          History
        </button>
        <Logoutbtn type="submit" onClick={handleLogout} />
      </div>
      <div className="activecontent">
        <ButtonNavbar name={activeContent} />
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default Navbar;
