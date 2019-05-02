import React,{useState} from 'react'
import Create from '../component/Create'
import History from '../component/History'
import List from '../component/List'
import './Navbar.css'

const Navbar=()=>{
    const [activeContent, setActiveContent] = useState("");

    const Buttons = props =>{
        if(props.name === "Create"){
            return <Create></Create>
        }
        else if(props.name === "History"){
            return <History></History>
        }
        else{
            return <List></List>
        }
    }
return(
    <div className="cont">
        <div className="menu">
        <button className="buttons" onClick={()=> setActiveContent("Create")}>Create</button>
        <button className="buttons" onClick={()=> setActiveContent("History")}>History</button>
        <button className="buttons" onClick={()=> setActiveContent("List")}>List</button>
            </div>
        <div className="activecontent">
        <Buttons name={activeContent}></Buttons>
        </div>

    </div>
)
}
export default Navbar