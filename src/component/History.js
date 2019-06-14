import React, { useState, useEffect } from "react";
import axios from "axios";
import "./History.css";
const Info = props => {
  const [infoData, setInfoData] = useState([]);
  const getApiAxios = async () => {
    const result = await axios.get(
      "https://monyet.free.beeceptor.com/v1/offerStore/getOffer"
    );
    setInfoData(result.data.offers);
  };
  useEffect(() => {
    getApiAxios();
  }, []);
  return (
    <div className="parent">
      {infoData.map(data => (
        <div className="show" key={data}>
          <div className="content-container-right">
            <img src={data.image} alt="Image" />
          </div>
          <div className="content-container-left">
            <div className="title-show">{data.title}</div>
            <div className="message-show-container">{data.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const History = () => {
  return <Info />;
};

export default History;
