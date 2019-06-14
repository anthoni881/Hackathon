import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { InputText } from "./form";

const Notif = props => {
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
const FormCreate = () => {
  const [titleState, setTitleState] = useState("");
  const [storeId, setStoreId] = useState("");
  const [messageState, setMessageState] = useState("");
  const [picState, setPicState] = useState(null);
  const [monthState, setMonthsState] = useState("January");
  const errors = validate(titleState, messageState);
  const isDisabled = Object.keys(errors).some(x => errors[x]);

  const getAndSetBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      callback(reader.result);
    };
  };
  const fileChangedHandler = event => {
    getAndSetBase64(event.target.files[0], value => {
      setPicState(value);
    });
  };
  localStorage.setItem("testObject", JSON.stringify(storeId));
  const info = JSON.parse(localStorage.getItem("userInfo"));
  console.log(info);
  const postApiAxios = async () => {
    const imageSplit = picState.split(",");
    // const Hallo = {
    //   image: imageSplit
    // };
    const Hallew = {
      storeId: info.storeId,
      title: titleState,
      message: messageState,
      month: monthState,
      img: imageSplit
    };
    await axios.post("http://10.58.93.51:8900/v1/offer", Hallew);
    // await axios
    //   .post("http://10.58.89.27:8900/v1/offer/uploadImage/50", Hallo)
    //   .then(res => {
    //     console.log(res.data);
    //   });
  };
  const changeTitle = event => {
    setTitleState(event.target.value);
  };
  const changeMessage = event => {
    setMessageState(event.target.value);
  };
  const changeMonth = month => {
    setMonthsState(month);
  };

  const Submitbtn = props => {
    const { submitClicked } = props;
    const handleSubmit = event => {
      if (!canBeSubmitted()) {
        event.preventDefault();
        return;
      }
      postApiAxios();
      submitClicked();
      setMessageState("");
      setTitleState("");
      setMonthsState("Januari");
    };
    return (
      <div className="submitbtn">
        <button disabled={props.isDisabled} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };

  const month = [
    "January",
    "Febuari  ",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  const Month = () => {
    return (
      <select onChange={e => changeMonth(e.target.value)} value={monthState}>
        {month.map(data => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
      </select>
    );
  };
  const Insertdate = () => {
    return (
      <div className="insertdate">
        <label className="labelname">Month</label>
        <Month />
      </div>
    );
  };
  const canBeSubmitted = () => {
    const errors = validate(titleState, messageState);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  };
  function validate(titleState, messageState) {
    return {
      title: titleState.length === 0,
      message: messageState.length === 0,
      image: picState === null
    };
  }

  const [click, setClick] = useState(false);
  const Clicked = () => {
    setClick(true);
  };
  const Closed = () => {
    setClick(false);
  };

  return (
    <div className="backParent">
      <div className="Create">
        <div className="content">
          <div className="inserttitle">
            <label className="labelname">Title</label>
            <InputText
              className="textname"
              type="text"
              placeholder="Enter Title"
              value={titleState}
              onChange={changeTitle}
              onKeyUp={changeTitle}
              required
            />
          </div>

          <div className="insertdesc">
            <label className="labelname">Description</label>
            <textarea
              className="textname"
              type="text"
              placeholder="Enter Description"
              value={messageState}
              onChange={changeMessage}
              onKeyUp={changeMessage}
              required
            />
          </div>
          <Insertdate />
          <div className="fileimg">
            <input
              type="file"
              name="pic"
              onChange={event => fileChangedHandler(event)}
            />
          </div>
          <Submitbtn isDisabled={isDisabled} submitClicked={Clicked} />
        </div>
        <Notif popupshow={click} okClick={Closed} />
      </div>
    </div>
  );
};
const Create = () => {
  return (
    <div>
      <FormCreate />
    </div>
  );
};
export default Create;
