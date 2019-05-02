import React,{useState} from 'react'
import './Create.css'
import axios from "axios";

const Create = () =>{
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [pic,setPic] = useState("");
    const [month,setMonth] = useState("");

    const postApiAxios = async()=> {
        const Hallew = {
          title: title,
          message: message,
          month:month
        };
        await axios
          .post("http://10.58.88.155:8900/v1/offer", Hallew)
          .then(res => {
            console.log(res.data);
          });
      };
    const changeTitle= text=>{
        setTitle(text);
        console.log(title);
    };
    const changeMessage= text=>{
        setMessage(text);
        console.log(message);
    };
    const changeMonth= text=>{
        setMonth(text);
        console.log(message);
    };
    const Submitbtn = ()=>{
        return(
                <div className="submitbtn">
                    <button onClick={()=> postApiAxios()}>Submit</button>
                </div>
            )
        }
    const selectHandler = text =>{
        setPic(text);
        console.log(pic)
    }

    const Month =()=>{
        return(
            <select>
                            <option value="Januari">Januari</option>
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
                            <option value="Desember">Desember</option>
                        </select>
        );
    }
    const Insertdate = () =>{
        return(
            <div className="insertdate">
                        <label className="labelname"><b>Month</b></label>
                        {/* <input className="textname" 
                        type="text" 
                        placeholder="Enter Month" 
                        onChange={event=>changeMonth(event.target.value)}
                        onKeyUp={event=>changeMonth(event.target.value)}
                        required></input> */}
                        <Month></Month>
                    </div>
        );
    }

    return(
        <div className="Create">
            <div className="content1">
                <div className="inserttitle">
                    <label className="labelname"><b>Title</b></label>
                    <input className="textname" 
                        type="text" 
                        placeholder="Enter Title" 
                        onChange={event=>changeTitle(event.target.value)}
                        onKeyUp={event=>changeTitle(event.target.value)}
                        required>
                    </input>
                </div>
                
                <div className="insertdesc">
                    <label className="labelname"><b>Description</b></label>
                    <textarea className="textname" 
                        type="text" 
                        placeholder="Enter Description" 
                        onChange={event=>changeMessage(event.target.value)}
                        onKeyUp={event=>changeMessage(event.target.value)}
                        required>
                    </textarea>
                </div>
            </div>

            <div className="content2">
                <Insertdate></Insertdate>
            <div className="fileimg">
                <input type="file" name="pic" onChange={()=>selectHandler()}></input>
            </div>
            <div>
                <Submitbtn></Submitbtn>
            </div>
            </div>
        </div>
    )
}
export default Create;