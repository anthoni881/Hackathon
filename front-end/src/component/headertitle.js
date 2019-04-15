import React from 'react'
import '../component/headertitle.css'
import Logoutbtn from '../component/Logoutbtn'

const title = ()=>{
    return(
        <div className="title">
            My Beacon
            <div className="logot">
            <Logoutbtn></Logoutbtn></div>
        </div>
    )
}
export default title