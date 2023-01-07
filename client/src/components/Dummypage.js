import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import "./dash.css"
const Dashboard = () => {
    return(
        <>
              <div id ="hellod" width="50%" margin="auto" padding="100px">
        <Link  align="center" to="/login">
          <button id="bu">client</button>
        </Link>
        <Link align="center" to="/sublogin">
          <button id="bu">subuser</button>
        </Link>
        <Link align="center" to="/Superlogin">
          <button id="bu">superadmin</button>
        </Link>
       </div> </>
    )
}

export default Dashboard;