import React from 'react'
import Headertitle from '../component/headertitle'
import Login from '../container/Login'

const HomePage = ()=>{
    return(
        <div>
        <div className="header">
            <Headertitle></Headertitle>
        </div>
        <Login></Login>
        </div>
    )
}
export default HomePage