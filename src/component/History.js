import React, { useState, useEffect } from "react";
import axios from "axios";
import "./History.css";

const Info = props => {
  const { infoshow, okClick } = props;
  const [infoData, setInfoData] = useState([]);
  const getApiAxios = async () => {
    const result = await axios.get(
      "https://beneruns.free.beeceptor.com/v1/offerStore/getOffer"
    );
    console.log(result.data);
    setInfoData(result.data);
  };
  useEffect(() => {
    getApiAxios();
  }, []);
  return (
    <div className={infoshow ? "infoshow" : "infoclose"}>
      {Object.keys(infoData).map(key => (
        <div className="show" key={key}>
          <h2 onClick={okClick}>&times;</h2>
          <div className="parent">
            <div className="content-container-right">
              <img src={infoData[1].image} alt="Image" />
            </div>
            <div className="content-container-left">
              <div className="title-show">{infoData[1].title}</div>
              <div className="message-show-container">
                {infoData[1].message}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const MoButton = props => {
  const { MoClick } = props;
  return (
    <div className="parentbtnmo">
      <button className="buttonMo" onClick={MoClick}>
        {props.children}
      </button>
    </div>
  );
};
const MonthB = () => {
  const [click, setClick] = useState(false);
  const Clicked = () => {
    setClick(true);
  };
  const Closed = () => {
    setClick(false);
  };
  return (
    <div className="parentMB">
      <div className="MB">
        <MoButton MoClick={Clicked}>Januari</MoButton>
        <MoButton>Febuari</MoButton>
        <MoButton>Maret</MoButton>
        <MoButton>April</MoButton>
        <MoButton>Mei</MoButton>
        <MoButton>Juni</MoButton>
        <MoButton>Juli</MoButton>
        <MoButton>Agustus</MoButton>
        <MoButton>September</MoButton>
        <MoButton>Oktober</MoButton>
        <MoButton>November</MoButton>
        <MoButton>Desember</MoButton>
      </div>
      <Info infoshow={click} okClick={Closed} />
    </div>
  );
};
const History = () => {
  return (
    <div className="parenthistory">
      <MonthB />
    </div>
  );
};

// const Text1 = props => {
//   const { monthClicked } = props;
//   return (
//     <div>
//       <p onClick={monthClicked}>asdas</p>
//     </div>
//   );
// };
// const PopUp = props => {
//   const { isPopupShown, okClicked } = props;
//   const [apiData, setApiData] = useState([]);
//   const getApiAxios = async () => {
//     await axios
//       .get("http://wewew.free.beeceptor.com/wadaw")
//       // axios.get("http://10.58.88.230:8900/v1/offer?offerId=50")
//       .then(res => {
//         const aaa = res.data;
//         console.log(aaa);
//         setApiData(aaa);
//       });
//   };
//   useEffect(() => {
//     getApiAxios();
//   }, []);
//   return (
//     <div className={isPopupShown ? "infoShow" : "infoClose"}>
//       <div className="contenthistory">
//         {apiData.map(data => (
//           <div className="card" key={data.id}>
//             <div>
//               <img
//                 src="https://www.w3schools.com/howto/img_avatar.png"
//                 alt="Avatar"
//               />
//             </div>
//             <div className="container">
//               <p>{data.month}</p>
//               <p>{data.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const History = () => {
//   const [isClicked, setIsClicked] = useState(false);
//   const openPopup = () => {
//     setIsClicked(true);
//   };
//   const closePopup = () => {
//     setIsClicked(false);
//   };
//   return (
//     <div>
//       <Text1 monthClicked={openPopup} />
//       <PopUp isPopupShown={isClicked} />
//     </div>
//   );
// };
export default History;
