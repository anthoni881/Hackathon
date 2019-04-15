import React,{useState} from 'react'
import './Create.css'
const Create = () =>{
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [pic,setPic] = useState("");
    const [date,setDate] = useState("");

    const postApiFetch = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                desc:desc,
            }),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(json=>console.log(json))
    }
    const changeTitle= text=>{
        setTitle(text);
        console.log(title);
    };
    const changeDesc= text=>{
        setDesc(text);
        console.log(desc);
    };
    const Submitbtn = ()=>{
        return(
                <div className="submitbtn">
                    <button onClick={()=> postApiFetch()}>Submit</button>
                </div>
            )
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
            required></input>
            </div>
            <div className="insertdesc">
            <label className="labelname"><b>Description</b></label>
            <input className="textname" 
            type="text" 
            placeholder="Enter Description" 
            onChange={event=>changeDesc(event.target.value)}
            onKeyUp={event=>changeDesc(event.target.value)}
            required></input>
            </div>
            </div>
            <div className="content2">
            <div className="fileimg">
                <input type="file" name="pic" accept="image/*"></input>
            </div>

            <div className="month">
                <form>
                Insert Month: <input type="month"></input>
                <input type="submit"></input>
                </form>
            </div>
            <div>
                <Submitbtn></Submitbtn>
            </div>
            </div>
        </div>
    )
}
export default Create;