import React, { useState } from "react";
import "./form.css";
import { Link } from "react-router-dom";
import Gambar from "../Images/gambar.jpg";

export const ButtonGlobal = props => {
  return (
    // <Link to="/setting">
    <div className="buttonlogin">
      <button onClick={props.onClick}>{props.name}</button>
    </div>
    // </Link>
  );
};
export const InputText = props => {
  return (
    <div className="inputtextlogin">
      <form>
        <input
          className={props.className}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          required
        />
      </form>
    </div>
  );
};
const Useridform = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const postApiFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        uname: uname,
        pwd: pwd
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
  const changeUname = text => {
    setUname(text);
    console.log(uname);
  };

  const changePwd = text => {
    setPwd(text);
    console.log(pwd);
  };

  return (
    <div className="columnLogin">
      <div className="signin">Sign In</div>
      <div className="inputformlogin">
        <div className="useridform">
          <form>
            <label>User Id</label>
            <InputText
              type="text"
              placeholder="Input User Id"
              onChange={event => changeUname(event.target.value)}
              onKeyUp={event => changePwd(event.target.value)}
              required
            />
          </form>
        </div>

        <div className="passwordform">
          <label>Password</label>
          <InputText
            type="text"
            placeholder="Input Password"
            onChange={event => changeUname(event.target.value)}
            onKeyUp={event => changePwd(event.target.value)}
            required
          />
        </div>
        <ButtonGlobal onClick={() => postApiFetch()} name="Login" />
      </div>
    </div>
  );
};

const FormLogin = () => {
  return (
    <div className="formParent">
      <div className="loginForm">
        <Useridform />
      </div>
      <div className="imageForm">
        <div className="imagelogin">
          <img src={Gambar} />
        </div>
      </div>
    </div>
  );
};

const form = () => {
  return (
    <div>
      <FormLogin />
    </div>
  );
};

export default form;
