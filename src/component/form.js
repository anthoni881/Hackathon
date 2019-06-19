import React, { useState, useContext } from "react";
import "./form.css";
import { Redirect } from "react-router-dom";
import Gambar from "../Images/Gambar.jpeg";
import Gambar2 from "../Images/gambar.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const ApplicationContext = React.createContext();
const ApplicationProvider = props => {
  const { children } = props;
  let init;
  if (localStorage.getItem("userInfo")) {
    init = true;
  } else {
    init = false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(init);
  const applicationValue = {
    isLoggedIn,
    setIsLoggedIn
  };
  return (
    <ApplicationContext.Provider value={{ ...applicationValue }}>
      {children}
    </ApplicationContext.Provider>
  );
};

const ApplicationConsumer = ApplicationContext.Consumer;
export { ApplicationProvider, ApplicationConsumer, ApplicationContext };

export const ButtonGlobal = props => {
  return (
    <div className="buttonlogin">
      <button
        disabled={props.isDisabled}
        onClick={props.onClick}
        type={props.type}
        required={props.required}
      >
        {props.name}
      </button>
    </div>
  );
};
export const InputText = props => {
  return (
    <div className="inputtextlogin">
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        value={props.value}
        required
      />
    </div>
  );
};

const Useridform = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const app = useContext(ApplicationContext);

  const postApiAxios = async () => {
    const LoginReq = {
      username: uname,
      password: pwd
    };
    try {
      const result = await axios.post(
        "http://10.58.89.92:8900/v1/storeLogin",
        LoginReq
      );
      const user = {
        storeId: result.data.storeId
      };
      localStorage.setItem("userInfo", JSON.stringify(user));
      app.setIsLoggedIn(true);
    } catch (error) {
      setUname("");
      setPwd("");
    }
  };

  const changeUname = event => {
    setUname(event.target.value);
  };
  const changePwd = event => {
    setPwd(event.target.value);
  };
  const handleSubmit = () => {
    if (uname.length === 0 || pwd.length === 0) {
      return alert("Masukan Password dan User Anda");
    } else {
      // app.setIsLoggedIn(true);
      postApiAxios();
    }
  };

  return app.isLoggedIn ? (
    <Redirect to="/home" />
  ) : (
    <div className="columnLogin">
      <div className="signin">Sign In</div>
      <div className="inputformlogin">
        <div className="useridform">
          <label>User Id</label>
          <InputText
            type="text"
            placeholder="Input User Id"
            onKeyUp={changeUname}
            value={uname}
            onChange={changeUname}
          />
        </div>

        <div className="passwordform">
          <label>Password</label>
          <InputText
            type="password"
            placeholder="Input Password"
            onChange={changePwd}
            value={pwd}
            onKeyUp={changePwd}
          />
        </div>
        <ButtonGlobal onClick={handleSubmit} name="Login" />
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
          <Carousel autoPlay>
            <div>
              <img src={Gambar} />
            </div>
            <div>
              <img src={Gambar2} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
const LoginNotif = props => {
  const { popupshow, okClick } = props;
  return (
    <div className={popupshow ? "notifshow" : "notifclose"}>
      <div className="pop">
        <h2 onClick={okClick}>&times;</h2>
        <p>Selamat! Promo Anda telah ditambahkan.</p>
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
