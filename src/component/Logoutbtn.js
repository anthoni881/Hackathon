import React from "react";
import "./Logout.css";

const Logoutbtn = props => {
  return (
    <div className="logoutbtn">
      <button type={props.type} onClick={props.onClick}>
        Logout
      </button>
    </div>
  );
};
export default Logoutbtn;
