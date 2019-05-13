import React from "react";
import "./Logout.css";
const Logoutbtn = props => {
  return (
    <div className={props.className}>
      <button type={props.type} onClick={props.onClick}>
        Logout
      </button>
    </div>
  );
};
export default Logoutbtn;
