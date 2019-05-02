import React,{useState} from 'react'
import axios from "axios";
import './History.css';
    const History =()=>{
      const [apiData, setApiData] = useState([]);
      const getApiAxios =() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        // axios.get("http://10.58.88.230:8900/v1/offer?offerId=50")
        .then(res => {
          const aaa = res.data
          console.log(aaa)
          setApiData(aaa);
        });
      };
        return(
            <div>
                <div className="contenthistory"> 
                  {apiData.map(data => (
                    <div className="card" key={data.id}>
                    <div>
                      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
                    </div>
                    <div className="container">
                    <p>
                      {data.name}
                    </p>
                    <p>
                      {data.email}
                    </p>
                    </div>
                </div>
                    // <tr key={data.id}>
                    // <div className="contentgetapi">
                    // <div className="namedata">
                    //  <td> {data.name}</td>
                    //  </div>
                    //  <div className="nameemail">
                    //  <td> {data.email}</td>
                    //  </div>
                    //  <div>
                    //    <button>Delete</button>
                    //  </div>
                    //  </div>
                    // </tr>
                    /* <p>{apiData.title}</p>
                    <p>{apiData.month}</p>
                    <p>{apiData.message}</p>
                    <p>{apiData.createdAt}</p>
                    <p>{apiData.lastModified}</p> */

                  ))} 
             </div>
             <button onClick={() => getApiAxios()}>Get API</button>
            </div>
        )
    }
    export default History

    