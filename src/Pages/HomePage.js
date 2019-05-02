import React from 'react'
import HeaderH from '../component/headerHomepage'
import Login from '../container/Login'

const HomePage = ()=>{

    return(
        <div>
        <div className="header">
            <HeaderH></HeaderH>
        </div>
        <Login></Login>
        </div>
    )
}
export default HomePage;