import React, {useState} from 'react'
import './form.css'
import { Link } from "react-router-dom";

const form=()=>{
    const [uname,setUname]= useState("");
    const [pwd,setPwd]= useState("");
    
    const postApiFetch = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            body: JSON.stringify({
                uname: uname,
                pwd:pwd
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json=>console.log(json)
        )
    }

    const changeUname= text=>{
        setUname(text);
        console.log(uname);
    };

    const changePwd = text =>{
        setPwd(text);
        console.log(pwd);
    }
    

    const Btn=()=>{
        return(
            <Link to="/setting">
            <div className="loginbtn">
        <button  onClick={()=> postApiFetch()}>
          Login
        </button></div>
         </Link>)
    }

    return(
        <div className="container">
        <div className="form">
            <label className="labelname"><b>Id Transmitter</b></label>
            <input className="textname" 
            type="text" 
            placeholder="Enter Id" 
            onChange={event => changeUname(event.target.value)}
            onKeyUp={event => changeUname(event.target.value)}
            required></input>
            <label className="labelname"><b>Password</b></label>
            <input className="textname" 
            type="password" 
            placeholder="Enter Password" 
            onChange={event => changePwd(event.target.value)}
            onKeyUp={event => changePwd(event.target.value)}
            required></input>
            <Btn></Btn>

        </div>
        </div>
    )
}

export default form