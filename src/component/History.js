import React, { useState, useEffect } from "react";
import axios from "axios";
import "./History.css";

const MoButton = props => {
  return (
    <div className="parentbtnmo">
      <button className="buttonMo">{props.children}</button>
    </div>
  );
};
const MonthB = () => {
  return (
    <div className="parentMB">
      <div className="MB">
        <MoButton>Januari</MoButton>
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
//     <div className={isPopupShown ? "popUpShow" : "popUpClose"}>
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
