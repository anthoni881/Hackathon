import React, { useState } from "react";
import Create from "../component/Create";
import History from "../component/History";
import List from "../component/List";
import Logoutbtn from "../component/Logoutbtn";
import "./Navbar.css";

const Navbar = () => {
  const [activeContent, setActiveContent] = useState("");

  const ButtonNavbar = props => {
    if (props.name === "Create") {
      return <Create />;
    } else if (props.name === "History") {
      return <History />;
    } else {
      return <List />;
    }
  };
  return (
    <div className="cont">
      <div className="menu">
        <button className="buttons" onClick={() => setActiveContent("Create")}>
          Create
        </button>
        <button className="buttons" onClick={() => setActiveContent("History")}>
          History
        </button>
        <button className="buttons" onClick={() => setActiveContent("List")}>
          List
        </button>
        <Logoutbtn className="logoutbtn" type="submit" />
      </div>
      <div className="activecontent">
        <ButtonNavbar name={activeContent} />
      </div>
    </div>
  );
};
export default Navbar;
