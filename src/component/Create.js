import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { InputText, ButtonGlobal } from "./form";

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
  const [messageState, setMessageState] = useState("");
  const [picState, setPicState] = useState("");
  const [monthState, setMonthsState] = useState("Jan");

  const postApiAxios = async () => {
    const Hallew = {
      title: titleState,
      message: messageState,
      month: monthState
    };
    await axios.post("https://wkwkw.free.beeceptor.com", Hallew).then(res => {
      console.log(res.data);
    });
  };
  const changeTitle = text => {
    setTitleState(text);
    console.log(titleState);
  };
  const changeMessage = text => {
    setMessageState(text);
    console.log(messageState);
  };
  const changeMonth = month => {
    setMonthsState(month);
    console.log(month);
  };

  const Submitbtn = props => {
    const { submitClicked } = props;
    const onClick = () => {
      postApiAxios();
      submitClicked();
    };
    return (
      <div className="submitbtn">
        <button onClick={onClick}>Submit</button>
      </div>
    );
  };
  const selectHandler = text => {
    setPicState(text);
    console.log(picState);
  };
  const month = ["Jan", "Feb", "Mar"];

  const Month = () => {
    return (
      <select onChange={e => changeMonth(e.target.value)} value={monthState}>
        {month.map(data => (
          <option key={data} value={data}>
            {data}
          </option>
        ))}
        {/* <option value="Januari">Januari</option>
        <option value="Febuari">Febuari</option>
        <option value="Maret">Maret</option>
        <option value="April">April</option>
        <option value="Mei">Mei</option>
        <option value="Juni">Juni</option>
        <option value="Juli">Juli</option>
        <option value="Agustus">Agustus</option>
        <option value="September">September</option>
        <option value="Oktober">Oktober</option>
        <option value="November">November</option>
        <option value="Desember">Desember</option> */}
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

  const [click, setClick] = useState(false);
  const Clicked = () => {
    setClick(true);
  };
  const Closed = () => {
    setClick(false);
  };

  return (
    <div className="Create">
      <div className="content">
        <div className="inserttitle">
          <label className="labelname">Title</label>
          <InputText
            className="textname"
            type="text"
            placeholder="Enter Title"
            onChange={event => changeTitle(event.target.value)}
            onKeyUp={event => changeTitle(event.target.value)}
            required
          />
        </div>

        <div className="insertdesc">
          <label className="labelname">Description</label>
          <textarea
            className="textname"
            type="text"
            placeholder="Enter Description"
            onChange={event => changeMessage(event.target.value)}
            onKeyUp={event => changeMessage(event.target.value)}
            required
          />
        </div>
        <Insertdate />
        <div className="fileimg">
          <input type="file" name="pic" onChange={() => selectHandler()} />
        </div>
        <Submitbtn submitClicked={Clicked} />
      </div>
      <Notif popupshow={click} okClick={Closed} />
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
